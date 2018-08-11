# Cafesium
Provide Korean Schools' Meal data.

# How to use

*NOTE : If you're in Elementary school, PHASE is 2. If you're in Middle School, PHASE is 3. If you're in High School, PHASE is 4.*

```sh
$ docker pull kjsman/cafesium
$ docker run -e SCHOOL_CODE='YOUR_SCHOOL_CODE' -e PHASE=<PHASE> -p 6537:6537 kjsman/cafesium
```

# If You Want to set Custom 404 Message

```sh
$ docker run -e SCHOOL_CODE='YOUR_SCHOOL_CODE' -e PHASE=<ELEMENTARY: 2, MIDDLE: 3, HIGH: 4> -p 6537:6537 kjsman/cafesium
```

# Server
```
http://localhost:6537/data
http://localhost:6537/data?year=2018&month=8&day=22
http://localhost:6537/data?time=3  # 1 is Breakfast, 2 is Lunch, 3 is Dinner
```
