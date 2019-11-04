[
    {
        'name':      'message-sizes-large',
        'type':      'varying',
        'uri': 'amqp://guest:guest@10.105.244.74:5672',
        'params':    [{
            'time-limit': 30
        }],
        'variables': [{
            'name':   'min-msg-size',
            'values': [
                5000,
                10000,
                50000,
                100000,
                500000,
                1000000
            ]
        }]
    },
    {
        'name':      'rate-vs-latency',
        'type':      'rate-vs-latency',
        'uri': 'amqp://guest:guest@10.105.244.74:5672',
        'params':    [{
            'time-limit': 30
        }]
    }
]