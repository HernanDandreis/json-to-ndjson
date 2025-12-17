# json-to-ndjson
This is micro process in NODE to convert files JSON in NDJSON for up to Mongo DB Compass

Run comand: ``` node json-to-ndjson.js file.json ``` that converter this 


##### Example
``` json
{
    "games": [
        {
            "has_demo": false,
            "type": "default",
            "created_at": "2021-08-04 01:51:31",
            "cover_url": "https://img.itch.zone/aW1nLzY2NjQ0NDcuanBn/315x250%23cb/Kp8WA%2B.jpg",
            "downloads_count": 385,
            "p_android": false,
            "purchases_count": 7,
            "published_at": "2021-08-05 21:15:27",
            "min_price": 0,
            "published": true,
            "short_text": "el monstruo siempre fue el humano"
        }
            ]
}
```

On this:

``` ndjson
{
    "has_demo":false,
    "type":"default",
    "created_at":"2021-08-04 01:51:31",
    "cover_url":"https://img.itch.zone/aW1nLzY2NjQ0NDcuanBn/315x250%23cb/Kp8WA%2B.jpg",
    "downloads_count":385,
    "p_android":false,
    "purchases_count":7,
    "published_at":"2021-08-05 21:15:27",
    "min_price":0,
    "published":true,"short_text":
    "el monstruo siempre fue el humano"
}
```
