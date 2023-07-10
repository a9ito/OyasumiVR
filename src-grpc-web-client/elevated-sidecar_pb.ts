// @generated by protobuf-ts 2.9.0 with parameter add_pb_suffix,force_server_none
// @generated from protobuf file "elevated-sidecar.proto" (package "OyasumiElevatedSidecar", syntax proto3)
// tslint:disable
import { ServiceType } from '@protobuf-ts/runtime-rpc';
import type { BinaryWriteOptions } from '@protobuf-ts/runtime';
import type { IBinaryWriter } from '@protobuf-ts/runtime';
import { WireType } from '@protobuf-ts/runtime';
import type { BinaryReadOptions } from '@protobuf-ts/runtime';
import type { IBinaryReader } from '@protobuf-ts/runtime';
import { UnknownFieldHandler } from '@protobuf-ts/runtime';
import type { PartialMessage } from '@protobuf-ts/runtime';
import { reflectionMergePartial } from '@protobuf-ts/runtime';
import { MESSAGE_TYPE } from '@protobuf-ts/runtime';
import { MessageType } from '@protobuf-ts/runtime';
/**
 * Requests & Responses
 *
 * @generated from protobuf message OyasumiElevatedSidecar.PingResponse
 */
export interface PingResponse {
  /**
   * @generated from protobuf field: uint32 pid = 1;
   */
  pid: number;
}
/**
 * @generated from protobuf message OyasumiElevatedSidecar.NvmlStatusResponse
 */
export interface NvmlStatusResponse {
  /**
   * @generated from protobuf field: OyasumiElevatedSidecar.NvmlStatus status = 1;
   */
  status: NvmlStatus;
}
/**
 * @generated from protobuf message OyasumiElevatedSidecar.NvmlDevicesResponse
 */
export interface NvmlDevicesResponse {
  /**
   * @generated from protobuf field: repeated OyasumiElevatedSidecar.NvmlDevice devices = 1;
   */
  devices: NvmlDevice[];
}
/**
 * @generated from protobuf message OyasumiElevatedSidecar.NvmlPowerManagementLimitRequest
 */
export interface NvmlPowerManagementLimitRequest {
  /**
   * @generated from protobuf field: string uuid = 1;
   */
  uuid: string;
  /**
   * @generated from protobuf field: uint32 power_limit = 2;
   */
  powerLimit: number;
}
/**
 * @generated from protobuf message OyasumiElevatedSidecar.NvmlPowerManagementLimitResponse
 */
export interface NvmlPowerManagementLimitResponse {
  /**
   * @generated from protobuf field: bool success = 1;
   */
  success: boolean;
  /**
   * @generated from protobuf field: optional OyasumiElevatedSidecar.NvmlSetPowerManagementLimitError error = 2;
   */
  error?: NvmlSetPowerManagementLimitError;
}
/**
 * @generated from protobuf message OyasumiElevatedSidecar.SetMsiAfterburnerProfileRequest
 */
export interface SetMsiAfterburnerProfileRequest {
  /**
   * @generated from protobuf field: string executable_path = 1;
   */
  executablePath: string;
  /**
   * @generated from protobuf field: uint32 profile = 2;
   */
  profile: number;
}
/**
 * @generated from protobuf message OyasumiElevatedSidecar.SetMsiAfterburnerProfileResponse
 */
export interface SetMsiAfterburnerProfileResponse {
  /**
   * @generated from protobuf field: bool success = 1;
   */
  success: boolean;
  /**
   * @generated from protobuf field: optional OyasumiElevatedSidecar.SetMsiAfterburnerProfileError error = 2;
   */
  error?: SetMsiAfterburnerProfileError;
}
/**
 * @generated from protobuf message OyasumiElevatedSidecar.NvmlDevice
 */
export interface NvmlDevice {
  /**
   * @generated from protobuf field: string uuid = 1;
   */
  uuid: string;
  /**
   * @generated from protobuf field: string name = 2;
   */
  name: string;
  /**
   * @generated from protobuf field: uint32 power_limit = 3;
   */
  powerLimit: number;
  /**
   * @generated from protobuf field: uint32 min_power_limit = 4;
   */
  minPowerLimit: number;
  /**
   * @generated from protobuf field: uint32 max_power_limit = 5;
   */
  maxPowerLimit: number;
  /**
   * @generated from protobuf field: uint32 default_power_limit = 6;
   */
  defaultPowerLimit: number;
}
/**
 * @generated from protobuf message OyasumiElevatedSidecar.Empty
 */
export interface Empty {}
// Types

/**
 * @generated from protobuf enum OyasumiElevatedSidecar.NvmlStatus
 */
export enum NvmlStatus {
  /**
   * @generated from protobuf enum value: NvmlStatus_Initializing = 0;
   */
  NvmlStatus_Initializing = 0,
  /**
   * @generated from protobuf enum value: NvmlStatus_InitComplete = 1;
   */
  NvmlStatus_InitComplete = 1,
  /**
   * @generated from protobuf enum value: NvmlStatus_DriverNotLoaded = 2;
   */
  NvmlStatus_DriverNotLoaded = 2,
  /**
   * @generated from protobuf enum value: NvmlStatus_LibLoadingError = 3;
   */
  NvmlStatus_LibLoadingError = 3,
  /**
   * @generated from protobuf enum value: NvmlStatus_NoPermission = 4;
   */
  NvmlStatus_NoPermission = 4,
  /**
   * @generated from protobuf enum value: NvmlStatus_NvmlUnknownError = 5;
   */
  NvmlStatus_NvmlUnknownError = 5,
  /**
   * @generated from protobuf enum value: NvmlStatus_SidecarUnavailable = 6;
   */
  NvmlStatus_SidecarUnavailable = 6,
  /**
   * @generated from protobuf enum value: NvmlStatus_UnknownError = 7;
   */
  NvmlStatus_UnknownError = 7,
}
/**
 * @generated from protobuf enum OyasumiElevatedSidecar.NvmlSetPowerManagementLimitError
 */
export enum NvmlSetPowerManagementLimitError {
  /**
   * @generated from protobuf enum value: NvmlSetPowerManagementLimitError_DeviceAccessError = 0;
   */
  NvmlSetPowerManagementLimitError_DeviceAccessError = 0,
  /**
   * @generated from protobuf enum value: NvmlSetPowerManagementLimitError_DeviceSetPowerLimitError = 1;
   */
  NvmlSetPowerManagementLimitError_DeviceSetPowerLimitError = 1,
  /**
   * @generated from protobuf enum value: NvmlSetPowerManagementLimitError_SidecarUnavailable = 2;
   */
  NvmlSetPowerManagementLimitError_SidecarUnavailable = 2,
  /**
   * @generated from protobuf enum value: NvmlSetPowerManagementLimitError_UnknownError = 3;
   */
  NvmlSetPowerManagementLimitError_UnknownError = 3,
}
/**
 * @generated from protobuf enum OyasumiElevatedSidecar.SetMsiAfterburnerProfileError
 */
export enum SetMsiAfterburnerProfileError {
  /**
   * @generated from protobuf enum value: SetMsiAfterburnerProfileError_InvalidProfileIndex = 0;
   */
  SetMsiAfterburnerProfileError_InvalidProfileIndex = 0,
  /**
   * @generated from protobuf enum value: SetMsiAfterburnerProfileError_ExeNotFound = 1;
   */
  SetMsiAfterburnerProfileError_ExeNotFound = 1,
  /**
   * @generated from protobuf enum value: SetMsiAfterburnerProfileError_ExeCannotExecute = 2;
   */
  SetMsiAfterburnerProfileError_ExeCannotExecute = 2,
  /**
   * @generated from protobuf enum value: SetMsiAfterburnerProfileError_ExeUnverifiable = 3;
   */
  SetMsiAfterburnerProfileError_ExeUnverifiable = 3,
  /**
   * @generated from protobuf enum value: SetMsiAfterburnerProfileError_ExeNotSigned = 4;
   */
  SetMsiAfterburnerProfileError_ExeNotSigned = 4,
  /**
   * @generated from protobuf enum value: SetMsiAfterburnerProfileError_ExeSignatureDisallowedNonEmbedded = 5;
   */
  SetMsiAfterburnerProfileError_ExeSignatureDisallowedNonEmbedded = 5,
  /**
   * @generated from protobuf enum value: SetMsiAfterburnerProfileError_ExeSignatureDisallowedNoIssuer = 6;
   */
  SetMsiAfterburnerProfileError_ExeSignatureDisallowedNoIssuer = 6,
  /**
   * @generated from protobuf enum value: SetMsiAfterburnerProfileError_ExeSignatureDisallowedNoSubject = 7;
   */
  SetMsiAfterburnerProfileError_ExeSignatureDisallowedNoSubject = 7,
  /**
   * @generated from protobuf enum value: SetMsiAfterburnerProfileError_ExeSignatureDisallowedNoMatch = 8;
   */
  SetMsiAfterburnerProfileError_ExeSignatureDisallowedNoMatch = 8,
  /**
   * @generated from protobuf enum value: SetMsiAfterburnerProfileError_UnknownError = 9;
   */
  SetMsiAfterburnerProfileError_UnknownError = 9,
}
// @generated message type with reflection information, may provide speed optimized methods
class PingResponse$Type extends MessageType<PingResponse> {
  constructor() {
    super('OyasumiElevatedSidecar.PingResponse', [
      { no: 1, name: 'pid', kind: 'scalar', T: 13 /*ScalarType.UINT32*/ },
    ]);
  }
  create(value?: PartialMessage<PingResponse>): PingResponse {
    const message = { pid: 0 };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<PingResponse>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: PingResponse
  ): PingResponse {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* uint32 pid */ 1:
          message.pid = reader.uint32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: PingResponse,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* uint32 pid = 1; */
    if (message.pid !== 0) writer.tag(1, WireType.Varint).uint32(message.pid);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message OyasumiElevatedSidecar.PingResponse
 */
export const PingResponse = new PingResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NvmlStatusResponse$Type extends MessageType<NvmlStatusResponse> {
  constructor() {
    super('OyasumiElevatedSidecar.NvmlStatusResponse', [
      {
        no: 1,
        name: 'status',
        kind: 'enum',
        T: () => ['OyasumiElevatedSidecar.NvmlStatus', NvmlStatus],
      },
    ]);
  }
  create(value?: PartialMessage<NvmlStatusResponse>): NvmlStatusResponse {
    const message = { status: 0 };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<NvmlStatusResponse>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: NvmlStatusResponse
  ): NvmlStatusResponse {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* OyasumiElevatedSidecar.NvmlStatus status */ 1:
          message.status = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: NvmlStatusResponse,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* OyasumiElevatedSidecar.NvmlStatus status = 1; */
    if (message.status !== 0) writer.tag(1, WireType.Varint).int32(message.status);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message OyasumiElevatedSidecar.NvmlStatusResponse
 */
export const NvmlStatusResponse = new NvmlStatusResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NvmlDevicesResponse$Type extends MessageType<NvmlDevicesResponse> {
  constructor() {
    super('OyasumiElevatedSidecar.NvmlDevicesResponse', [
      {
        no: 1,
        name: 'devices',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => NvmlDevice,
      },
    ]);
  }
  create(value?: PartialMessage<NvmlDevicesResponse>): NvmlDevicesResponse {
    const message = { devices: [] };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<NvmlDevicesResponse>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: NvmlDevicesResponse
  ): NvmlDevicesResponse {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* repeated OyasumiElevatedSidecar.NvmlDevice devices */ 1:
          message.devices.push(NvmlDevice.internalBinaryRead(reader, reader.uint32(), options));
          break;
        default:
          let u = options.readUnknownField;
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: NvmlDevicesResponse,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* repeated OyasumiElevatedSidecar.NvmlDevice devices = 1; */
    for (let i = 0; i < message.devices.length; i++)
      NvmlDevice.internalBinaryWrite(
        message.devices[i],
        writer.tag(1, WireType.LengthDelimited).fork(),
        options
      ).join();
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message OyasumiElevatedSidecar.NvmlDevicesResponse
 */
export const NvmlDevicesResponse = new NvmlDevicesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NvmlPowerManagementLimitRequest$Type extends MessageType<NvmlPowerManagementLimitRequest> {
  constructor() {
    super('OyasumiElevatedSidecar.NvmlPowerManagementLimitRequest', [
      { no: 1, name: 'uuid', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: 'power_limit', kind: 'scalar', T: 13 /*ScalarType.UINT32*/ },
    ]);
  }
  create(value?: PartialMessage<NvmlPowerManagementLimitRequest>): NvmlPowerManagementLimitRequest {
    const message = { uuid: '', powerLimit: 0 };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined)
      reflectionMergePartial<NvmlPowerManagementLimitRequest>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: NvmlPowerManagementLimitRequest
  ): NvmlPowerManagementLimitRequest {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string uuid */ 1:
          message.uuid = reader.string();
          break;
        case /* uint32 power_limit */ 2:
          message.powerLimit = reader.uint32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: NvmlPowerManagementLimitRequest,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string uuid = 1; */
    if (message.uuid !== '') writer.tag(1, WireType.LengthDelimited).string(message.uuid);
    /* uint32 power_limit = 2; */
    if (message.powerLimit !== 0) writer.tag(2, WireType.Varint).uint32(message.powerLimit);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message OyasumiElevatedSidecar.NvmlPowerManagementLimitRequest
 */
export const NvmlPowerManagementLimitRequest = new NvmlPowerManagementLimitRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NvmlPowerManagementLimitResponse$Type extends MessageType<NvmlPowerManagementLimitResponse> {
  constructor() {
    super('OyasumiElevatedSidecar.NvmlPowerManagementLimitResponse', [
      { no: 1, name: 'success', kind: 'scalar', T: 8 /*ScalarType.BOOL*/ },
      {
        no: 2,
        name: 'error',
        kind: 'enum',
        opt: true,
        T: () => [
          'OyasumiElevatedSidecar.NvmlSetPowerManagementLimitError',
          NvmlSetPowerManagementLimitError,
        ],
      },
    ]);
  }
  create(
    value?: PartialMessage<NvmlPowerManagementLimitResponse>
  ): NvmlPowerManagementLimitResponse {
    const message = { success: false };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined)
      reflectionMergePartial<NvmlPowerManagementLimitResponse>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: NvmlPowerManagementLimitResponse
  ): NvmlPowerManagementLimitResponse {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */ 1:
          message.success = reader.bool();
          break;
        case /* optional OyasumiElevatedSidecar.NvmlSetPowerManagementLimitError error */ 2:
          message.error = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: NvmlPowerManagementLimitResponse,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* bool success = 1; */
    if (message.success !== false) writer.tag(1, WireType.Varint).bool(message.success);
    /* optional OyasumiElevatedSidecar.NvmlSetPowerManagementLimitError error = 2; */
    if (message.error !== undefined) writer.tag(2, WireType.Varint).int32(message.error);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message OyasumiElevatedSidecar.NvmlPowerManagementLimitResponse
 */
export const NvmlPowerManagementLimitResponse = new NvmlPowerManagementLimitResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetMsiAfterburnerProfileRequest$Type extends MessageType<SetMsiAfterburnerProfileRequest> {
  constructor() {
    super('OyasumiElevatedSidecar.SetMsiAfterburnerProfileRequest', [
      { no: 1, name: 'executable_path', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: 'profile', kind: 'scalar', T: 13 /*ScalarType.UINT32*/ },
    ]);
  }
  create(value?: PartialMessage<SetMsiAfterburnerProfileRequest>): SetMsiAfterburnerProfileRequest {
    const message = { executablePath: '', profile: 0 };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined)
      reflectionMergePartial<SetMsiAfterburnerProfileRequest>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SetMsiAfterburnerProfileRequest
  ): SetMsiAfterburnerProfileRequest {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string executable_path */ 1:
          message.executablePath = reader.string();
          break;
        case /* uint32 profile */ 2:
          message.profile = reader.uint32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: SetMsiAfterburnerProfileRequest,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string executable_path = 1; */
    if (message.executablePath !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.executablePath);
    /* uint32 profile = 2; */
    if (message.profile !== 0) writer.tag(2, WireType.Varint).uint32(message.profile);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message OyasumiElevatedSidecar.SetMsiAfterburnerProfileRequest
 */
export const SetMsiAfterburnerProfileRequest = new SetMsiAfterburnerProfileRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetMsiAfterburnerProfileResponse$Type extends MessageType<SetMsiAfterburnerProfileResponse> {
  constructor() {
    super('OyasumiElevatedSidecar.SetMsiAfterburnerProfileResponse', [
      { no: 1, name: 'success', kind: 'scalar', T: 8 /*ScalarType.BOOL*/ },
      {
        no: 2,
        name: 'error',
        kind: 'enum',
        opt: true,
        T: () => [
          'OyasumiElevatedSidecar.SetMsiAfterburnerProfileError',
          SetMsiAfterburnerProfileError,
        ],
      },
    ]);
  }
  create(
    value?: PartialMessage<SetMsiAfterburnerProfileResponse>
  ): SetMsiAfterburnerProfileResponse {
    const message = { success: false };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined)
      reflectionMergePartial<SetMsiAfterburnerProfileResponse>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SetMsiAfterburnerProfileResponse
  ): SetMsiAfterburnerProfileResponse {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool success */ 1:
          message.success = reader.bool();
          break;
        case /* optional OyasumiElevatedSidecar.SetMsiAfterburnerProfileError error */ 2:
          message.error = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: SetMsiAfterburnerProfileResponse,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* bool success = 1; */
    if (message.success !== false) writer.tag(1, WireType.Varint).bool(message.success);
    /* optional OyasumiElevatedSidecar.SetMsiAfterburnerProfileError error = 2; */
    if (message.error !== undefined) writer.tag(2, WireType.Varint).int32(message.error);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message OyasumiElevatedSidecar.SetMsiAfterburnerProfileResponse
 */
export const SetMsiAfterburnerProfileResponse = new SetMsiAfterburnerProfileResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NvmlDevice$Type extends MessageType<NvmlDevice> {
  constructor() {
    super('OyasumiElevatedSidecar.NvmlDevice', [
      { no: 1, name: 'uuid', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: 'name', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: 'power_limit', kind: 'scalar', T: 13 /*ScalarType.UINT32*/ },
      { no: 4, name: 'min_power_limit', kind: 'scalar', T: 13 /*ScalarType.UINT32*/ },
      { no: 5, name: 'max_power_limit', kind: 'scalar', T: 13 /*ScalarType.UINT32*/ },
      { no: 6, name: 'default_power_limit', kind: 'scalar', T: 13 /*ScalarType.UINT32*/ },
    ]);
  }
  create(value?: PartialMessage<NvmlDevice>): NvmlDevice {
    const message = {
      uuid: '',
      name: '',
      powerLimit: 0,
      minPowerLimit: 0,
      maxPowerLimit: 0,
      defaultPowerLimit: 0,
    };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<NvmlDevice>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: NvmlDevice
  ): NvmlDevice {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string uuid */ 1:
          message.uuid = reader.string();
          break;
        case /* string name */ 2:
          message.name = reader.string();
          break;
        case /* uint32 power_limit */ 3:
          message.powerLimit = reader.uint32();
          break;
        case /* uint32 min_power_limit */ 4:
          message.minPowerLimit = reader.uint32();
          break;
        case /* uint32 max_power_limit */ 5:
          message.maxPowerLimit = reader.uint32();
          break;
        case /* uint32 default_power_limit */ 6:
          message.defaultPowerLimit = reader.uint32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: NvmlDevice,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string uuid = 1; */
    if (message.uuid !== '') writer.tag(1, WireType.LengthDelimited).string(message.uuid);
    /* string name = 2; */
    if (message.name !== '') writer.tag(2, WireType.LengthDelimited).string(message.name);
    /* uint32 power_limit = 3; */
    if (message.powerLimit !== 0) writer.tag(3, WireType.Varint).uint32(message.powerLimit);
    /* uint32 min_power_limit = 4; */
    if (message.minPowerLimit !== 0) writer.tag(4, WireType.Varint).uint32(message.minPowerLimit);
    /* uint32 max_power_limit = 5; */
    if (message.maxPowerLimit !== 0) writer.tag(5, WireType.Varint).uint32(message.maxPowerLimit);
    /* uint32 default_power_limit = 6; */
    if (message.defaultPowerLimit !== 0)
      writer.tag(6, WireType.Varint).uint32(message.defaultPowerLimit);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message OyasumiElevatedSidecar.NvmlDevice
 */
export const NvmlDevice = new NvmlDevice$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Empty$Type extends MessageType<Empty> {
  constructor() {
    super('OyasumiElevatedSidecar.Empty', []);
  }
  create(value?: PartialMessage<Empty>): Empty {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<Empty>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: Empty
  ): Empty {
    return target ?? this.create();
  }
  internalBinaryWrite(
    message: Empty,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message OyasumiElevatedSidecar.Empty
 */
export const Empty = new Empty$Type();
/**
 * @generated ServiceType for protobuf service OyasumiElevatedSidecar.OyasumiElevatedSidecar
 */
export const OyasumiElevatedSidecar = new ServiceType(
  'OyasumiElevatedSidecar.OyasumiElevatedSidecar',
  [
    { name: 'Ping', options: {}, I: Empty, O: PingResponse },
    { name: 'RequestStop', options: {}, I: Empty, O: Empty },
    { name: 'GetNvmlStatus', options: {}, I: Empty, O: NvmlStatusResponse },
    { name: 'GetNvmlDevices', options: {}, I: Empty, O: NvmlDevicesResponse },
    {
      name: 'SetNvmlPowerManagementLimit',
      options: {},
      I: NvmlPowerManagementLimitRequest,
      O: NvmlPowerManagementLimitResponse,
    },
    {
      name: 'SetMsiAfterburnerProfile',
      options: {},
      I: SetMsiAfterburnerProfileRequest,
      O: SetMsiAfterburnerProfileResponse,
    },
  ]
);
