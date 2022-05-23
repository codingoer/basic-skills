---
category: 
  - IDEA
tag:
  - IDEA  
---

# File and code Templates

## Files

- class

可以更换Header

```java
#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end
#parse("File Header.java")
public class ${NAME} {
}
```

## Includes

- 时间格式（跟对系统时间格式）

```java
/**
 * Description：
 *
 * @author LiuQiang
 * @date Created in $DATE $TIME
 */
```

```java
/**
 * Description：
 *
 * @author LiuQiang
 * @date Created in 2022/5/23 9:10 AM
 */
```

- 时间格式2

```java
/**
 * Description：
 *
 * @author LiuQiang
 * @date Created in $DATE $HOUR:$MINUTE
 */
```

```java
/**
 * Description：
 *
 * @author LiuQiang
 * @date Created in 2022/5/23 09:14
 */
```