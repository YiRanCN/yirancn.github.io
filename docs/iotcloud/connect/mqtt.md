---
sidebar_position: 3
---

# MQTT 设备接入

我觉得大概分两种模式：

- 设备对接本平台的属性协议
- 设备对接本平台的透传协议

两种模式的设备 connect 是一样的。

### 设备 connect

---

- ClientID device:{deviceCode} 举例：device:XoVnVQ2
- Username {deviceCode} 举例：XoVnVQ2
- Password {devicePwd} 举例：YXOsHbV

连接成功后，默认订阅

- /device/${device.code}/attributes/d

可根据具体应用场景，发布

- /device/${device.code}/attributes/u
- /device/${device.code}/attributes/req/u

可根据具体应用场景，订阅

- /device/${device.code}/attributes/res/d

### 设备对接本平台的属性协议

#### 设备上报属性

---

数据流向

- 设备 >> 云端 >> 用户

允许属性类型

- 设备上报
- 设备云端共享

topic

- /device/${device.code}/attributes/u
- /account/${user.account}/${device.code}/attributes/d

plyload

- [attributeCode:string] : [value:number|string]

#### 用户写入属性

---

数据流向

- 用户 >> 云端 >> 设备

允许属性类型

- 云端下发
- 设备云端共享 注：云端收到此属性后，会立即存储；设备收到此属性后，应该立即上报；
- 云端私有 注：此类属性只会到云端，不会下发给设备

topic

- /account/${user.account}/${device.code}/attributes/u
- /device/${device.code}/attributes/d

plyload

- [attributeCode:string] : [value:number|string]

### 设备对接本平台的透传协议

#### 设备上报透传数据

---

数据流向

- 设备 >> 云端 >> 用户

允许属性类型

- 设备上报
- 设备云端共享

topic

- /device/${device.code}/t/u
- 协议解析后模拟 /device/${device.code}/attributes/u
- /account/${user.account}/${device.code}/attributes/d

plyload

- [attributeCode:string] : [value:number|string]

#### 用户写入属性

---

数据流向

- 用户 >> 云端 >> 设备

允许属性类型

- 云端下发
- 设备云端共享 注：云端收到此属性后，会立即存储；设备收到此属性后，应该立即上报；
- 云端私有 注：此类属性只会到云端，不会下发给设备

topic

- /account/${user.account}/${device.code}/attributes/u
- 协议解析后模拟 /device/${device.code}/t/d

plyload

- [attributeCode:string] : [value:number|string]

### 举例说明

#### 自行实现

有设备端研发能力的可以根据上面的协议自行研发实现。

或者设备量大的，可以让 DTU 或模组厂商根据上面的协议实现。

目前，本平台还无法做到让下面的 DTU 厂商实现属性交互协议，下面举例，只举例透传协议方式。
相对于 MQTT 透传，100%的 DTU 厂商都实现了 TCP 协议接入，大家购买 DTU 的时候请仔细辨别，并非所有的 DTU 都支持 MQTT 透传。

#### 塔石 DTU

#### 有人 DTU

#### 四信 DTU
