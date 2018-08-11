# Cafesium
Provide Korean Schools' Meal data.

# How to use

```sh
$ docker pull kjsman/cafesium
$ docker run -e SCHOOL_CODE='YOUR_SCHOOL_CODE' -e PHASE=<ELEMENTARY: 2, MIDDLE: 3, HIGH: 4> -p 6537:6537 kjsman/cafesium
```
