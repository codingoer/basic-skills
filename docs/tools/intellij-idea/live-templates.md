---
category: 
  - IDEA
tag:
  - IDEA
---

# Live Templates

## Class Comments

1. create Templates Group

2. create Live Template

3. set abbreviation

4. Temmplate Text

```java
*
 * Description：
 *
 * @author LiuQiang
 * @date Created in $DATE$ $TIME$
 */
```

5. Edit Template Variables

- DATE -> date()
- TIME -> time("HH:mm")

6. Applicable in Java: commment

## Function Templates

1. create Templates Group

2. create Live Template

3. set abbreviation

4. Temmplate Text

```java
*
 * Description：
 *
 * @param $PARAM$
 * @return $RETURN$
 * @author LiuQiang
 * @date Created in $DATE$ $TIME$
 */
```
5. Edit Template Variables

- DATE -> date()
- TIME -> time("HH:mm")
- RETURN -> methodReturnType()
- PARAM

```groovy
groovyScript("def result=''; def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList(); for(i = 0; i < params.size(); i++) {result+=' * @param ' + params[i] + ((i < params.size() - 1) ? '\\n':'')}; return result", methodParameters()) 
```

6. Applicable in Java: commment