use tauri::Manager;
use tauri::{
    AppHandle, CustomMenuItem, Runtime, SystemTray, SystemTrayEvent, SystemTrayMenu,
};

use crate::SYSTEMTRAY_MANAGER;

const QUIT: &'static str = "quit";

#[derive(Debug, Clone)]
pub struct SystemTrayManager {
    pub exit_in_tray: bool,
    pub start_in_tray: bool,
}

impl SystemTrayManager {
    pub fn new() -> SystemTrayManager {
        SystemTrayManager { exit_in_tray: false, start_in_tray: false, }
    }
    
    // pub fn handle_window_exit<R: Runtime>(&self) -> impl Fn(GlobalWindowEvent<R>) + Send + Sync + 'static {
    //     return |event| match event.event() {
    //         tauri::WindowEvent::CloseRequested { api, .. } => {
    //             event.window().hide().unwrap();
    //             api.prevent_close();
    //         }
    //         _ => {}
    //     }
    // }
}

// Initializes the system tray with menus.
pub fn init_system_tray() -> SystemTray {
    // Menus
    let menu_quit = CustomMenuItem::new(QUIT, "Quit");

    let tray_menu = SystemTrayMenu::new()
        //.add_native_item(SystemTrayMenuItem::Separator)
        .add_item(menu_quit);

    let tray = SystemTray::new().with_menu(tray_menu);

    return tray;
}

pub fn handle_events<R: Runtime>() -> impl Fn(&AppHandle<R>, SystemTrayEvent) + Send + Sync + 'static
{
    return |app, event| {
        let manager_guard = SYSTEMTRAY_MANAGER.lock().unwrap();
        let manager = manager_guard.as_ref().unwrap();

        match event {
            SystemTrayEvent::MenuItemClick { id, .. } => {
                match id.as_str() {
                    QUIT => std::process::exit(0),
                    _ => {}
                }
            },

            // When clicking the tray icon, restore and focus window.
            SystemTrayEvent::LeftClick { tray_id, .. } => {
                let window = app.get_window("main").unwrap();
                window.show().unwrap();
                window.set_focus().unwrap();
            }
            _ => {}
        };
    }
}

#[tauri::command]
pub fn set_exit_in_system_tray(app_handle: AppHandle, status: bool) {
    let mut manager_guard = SYSTEMTRAY_MANAGER.lock().unwrap();
    let mut manager: &mut SystemTrayManager = manager_guard.as_mut().unwrap();
    manager.exit_in_tray = status;
}

#[tauri::command]
pub fn set_start_in_system_tray(app_handle: AppHandle, status: bool) {
    let mut manager_guard = SYSTEMTRAY_MANAGER.lock().unwrap();
    let mut manager: &mut SystemTrayManager = manager_guard.as_mut().unwrap();
    manager.start_in_tray = status;
}