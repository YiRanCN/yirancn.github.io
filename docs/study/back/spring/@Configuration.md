在 Spring 框架中，@Configuration 注解用于声明一个 Java 类作为配置类，它替代了传统的 XML 配置方式。通过@Configuration 注解标记的类可以包含@Bean 注解，用于定义 Spring 容器中的 Bean 对象。

### proxyBeanMethods

@Configuration 注解中，有一个非常重要的属性 proxyBeanMethods，它控制着@Configuration 类中@Bean 方法的代理行为。

该属性接受一个布尔值，设置为 true 表示启用代理模式，设置为 false 表示禁用代理模式。

在@Configuration 类中，当 proxyBeanMethods 属性设置为 true 时，Spring 会对@Configuration 类进行 CGLIB 代理。

对@Configuration 类进行代理后，调用@Bean 方法时，Spring 会检查是否已经存在该 Bean，如果存在，则直接返回已存在的 Bean，否则调用方法创建新的 Bean 并缓存起来。

在禁用代理模式下，Spring 容器每次调用@Bean 方法时都会执行一次方法体，不会缓存 Bean 对象。

### @bean

@bean：给容器中添加组件，以方法名作为组件的 id，返回类型为组件类型，返回的值，就是组件在容器中的实例
