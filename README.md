# Cafesium
Provide Korean Schools' Meal data.

# How to use

*NOTE : 
If you're in Elementary school, PHASE is 2. in Middle School, PHASE is 3. in High School, PHASE is 4.*

```sh
$ docker pull kjsman/cafesium
$ docker run -e SCHOOL_CODE='YOUR_SCHOOL_CODE' -e PHASE=YOUR_PHASE -p 6537:6537 kjsman/cafesium
```

You can add custom 404 Message with `-e NOT_FOUND='YOUR_ERROR_MESSAGE'`.

If your School Code starts with 'A', you should add custom NEIS DOMAIN's prefix:
`-e DOMAIN='YOUR_NEIS_DOMAIN'` For example, if your NEIS Domain is `stu.dje.go.kr`, you should input `dje`.

# Server

```
http://localhost:6537/data
http://localhost:6537/data?year=2018&month=8&day=22
http://localhost:6537/data?time=3  # 1 is Breakfast, 2 is Lunch, 3 is Dinner
```
