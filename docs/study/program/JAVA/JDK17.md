# JDK17

### 限制类继承 sealed 类

Sealed 类是一种新的类修饰符，用于限制类的继承。Sealed 类可以控制哪些类可以继承自它，这样可以使得代码更加安全、可维护。Sealed 类的使用可以在编译时强制执行一些规则，从而避免运行时错误。

### Pattern Matching for Switch 语法

```Java
public static void main(String[] args) {
    Object obj = "hello";

    switch (obj) {
        case String s && s.length() > 5 -> System.out.println("长字符串");
        case String s -> System.out.println("短字符串");
        case Integer i -> System.out.println("整型数");
        default -> System.out.println("不支持的类型");
    }
}
```

### Record 类

Record 类是一种新的数据类，可以用于定义只有属性和访问器的简单数据对象。Record 类可以简化代码，使得代码更加易读、易维护。Record 类的使用可以减少代码量，避免出现大量的 getter 和 setter 方法。

```Java
public record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {
        Person person = new Person("John", 30);

        System.out.println("Name: " + person.name());
        System.out.println("Age: " + person.age());
    }
}
```

在这个示例中，我们定义了一个名为 Person 的 Record 类，它有两个字段：name 和 age。Record 类会自动生成一个带有这些字段的构造函数、getter 方法和 equals、hashCode 和 toString 方法。

### 增强的 Java 集合库

#### of() 方法：创建一个不可变的集合

```Java
List<String> list = List.of("apple", "banana", "orange");
Set<Integer> set = Set.of(1, 2, 3, 4);
Map<String, Integer> map = Map.of("apple", 1, "banana", 2, "orange", 3);
```

#### forEach() 方法：遍历集合

```Java
List<String> list = List.of("apple", "banana", "orange");
list.forEach(name -> System.out.println(name));
Set<Integer> set = Set.of(1, 2, 3, 4);
set.forEach(number -> System.out.println(number));
```

#### Collectors 类：提供了一系列的归约操作

```Java
List<String> list = List.of("apple", "banana", "orange");
String joinedString = list.stream().collect(Collectors.joining("-", "[", "]"));
System.out.println(joinedString);

Map<String, Integer> map = Map.of("apple", 1, "banana", 2, "orange", 3);
Map<Integer, String> reversedMap = map.entrySet().stream().collect(Collectors.toMap(Map.Entry::getValue, Map.Entry::getKey));
System.out.println(reversedMap);
```

#### takeWhile() 方法和 dropWhile() 方法：根据条件截取集合

```Java
List<Integer> list = List.of(1, 2, 3, 4, 5, 6, 7);
List<Integer> takenList = list.stream().takeWhile(number -> number < 5).collect(Collectors.toList());
System.out.println(takenList);

List<Integer> dropedList = list.stream().dropWhile(number -> number < 5).collect(Collectors.toList());
System.out.println(dropedList);
```

#### toArray(IntFunction<T[]>) 方法：返回集合中的所有元素到一个新数组中

```Java
List<String> list = List.of("apple", "banana", "orange");
String[] array = list.toArray(String[]::new);
System.out.println(Arrays.toString(array));
```
