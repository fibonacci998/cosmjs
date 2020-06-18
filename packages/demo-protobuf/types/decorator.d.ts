import { TypeDecorator } from "protobufjs";
import { Registry } from "./registry";
export declare function CosmosMessage(registry: Registry, typeUrl: string): TypeDecorator<any>;
export declare const CosmosField: {
  Boolean: (id: number) => import("protobufjs").FieldDecorator;
  String: (id: number) => import("protobufjs").FieldDecorator;
  Bytes: (id: number) => import("protobufjs").FieldDecorator;
  Int64: (id: number) => import("protobufjs").FieldDecorator;
  UInt64: (id: number) => import("protobufjs").FieldDecorator;
  Repeated: (id: number) => import("protobufjs").FieldDecorator;
};
