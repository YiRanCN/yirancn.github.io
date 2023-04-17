---
sidebar_position: 2
---

### 数据流向

浏览器 》Nginx 》API 》产生Nginx log日志 》Filebeat 》Logstash 》ElasticSearch

### 分析点

#### 接口访问量
```shell
#访问总量
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d '{"size" : 0 }'

#昨日访问总量
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"sort": [{"ts": {"order": "desc"}}], 
  "size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"24/May/2020:00:00:00 +0800",
    "lte":"25/May/2020:00:00:00 +0800"
  }}}}}
}'

#昨日访问总量--按照小时聚合--按照时间排序
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"sort": [{"ts": {"order": "desc"}}], 
  "size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"16/Jun/2020:00:00:00 +0800",
    "lte":"17/Jun/2020:00:00:00 +0800"
  }}}}},
  "aggs": {
  	"groupby_hour_reqs":{
    	"date_histogram":{
      	"field":"ts",
        "interval":"1h",
        "format":"yyyy-MM-dd:HH",
        "time_zone":"+08:00",
        "min_doc_count": 0
      }
    }
  }
}'

#昨日访问总量--按照小时聚合--按照访问量排序
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"sort": [{"ts": {"order": "desc"}}], 
  "size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"25/May/2020:00:00:00 +0800",
    "lte":"26/May/2020:00:00:00 +0800"
  }}}}},
  "aggs": {
  	"groupby_hour_reqs":{
    	"date_histogram":{
      	"field":"ts",
        "interval":"1h",
        "format":"yyyy-MM-dd:HH",
        "time_zone":"+08:00",
        "min_doc_count": 0,
        "order" : {
          "_count" : "desc"
        }
      }
    }
  }
}'
#100s内访问总量--按照秒聚合--按照访问量排序==QPS###################
#########所有访问
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"sort": [{"ts": {"order": "desc"}}], 
  "size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"now-100s"
  }}}}},
  "aggs": {
  	"groupby_hour_reqs":{
    	"date_histogram":{
      	"field":"ts",
        "interval":"1s",
        "format":"yyyy-MM-dd:HH:mm:ss",
        "time_zone":"+08:00",
        "min_doc_count": 20,
        "order" : {
          "_count" : "desc"
        }
      }
    }
  }
}'
#########某个IP
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"sort": [{"ts": {"order": "desc"}}], 
  "size" : 0,
  "query":{"constant_score":{
  "filter":{
  	"bool":{
    "must":[{"term":{"ip":"101.132.122.94"}},
      {"range":{"ts":{
        "gte":"now-600s"
      }}}
      ]
    }
  }
  }},
  "aggs": {
  	"groupby_hour_reqs":{
    	"date_histogram":{
      	"field":"ts",
        "interval":"1s",
        "format":"yyyy-MM-dd:HH:mm:ss",
        "time_zone":"+08:00",
        "min_doc_count": 1,
        "order" : {
          "_count" : "desc"
        }
      }
    }
  }
}'

#今日访问总量
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"sort": [{"ts": {"order": "desc"}}], 
  "size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"23/May/2020:00:00:00 +0800"
  }}}}}
}'

#当前小时访问总量
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"sort": [{"ts": {"order": "asc"}}], 
  "size" : 1,
  "query":{"constant_score":{"filter":{"range":{"ts":{"gte":"now/h"}}}}}
}'

#近一个月访问总量--按照天聚合--按照时间排序 --非二开
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"sort": [{"ts": {"order": "desc"}}], 
  "size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"now-1M"
  }}}}},
  "aggs": {
  	"groupby_hour_reqs":{
    	"date_histogram":{
      	"field":"ts",
        "interval":"1d",
        "format":"yyyy-MM-dd",
        "time_zone":"+08:00",
        "min_doc_count": 0
      }
    }
  }
}'
#近一个月访问总量--按照天聚合--按照时间排序 --二开
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"sort": [{"ts": {"order": "desc"}}], 
  "size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"now-1M"
  }}}}},
  "aggs": {
  	"groupby_hour_reqs":{
    	"date_histogram":{
      	"field":"ts",
        "interval":"1d",
        "format":"yyyy-MM-dd",
        "time_zone":"+08:00",
        "min_doc_count": 0
      }
    }
  }
}'
```
#### 访问最多的接口排名
```shell
# 所有接口分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"22/May/2018:00:00:00 +0800"
  }}}}},
  "aggs": {"all_urls": {"terms": { "field": "url" }}}
}'

# 昨日接口分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 10,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"17/Dec/2020:00:00:00 +0800",
    "lte":"18/Dec/2020:00:00:00 +0800"
  }}}}},
  "aggs": {"all_urls": {"terms": { "field": "url" }}}
}'
# 今日接口分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"23/May/2020:00:00:00 +0800",
    "lte":"24/May/2020:00:00:00 +0800"
  }}}}},
  "aggs": {"all_urls": {"terms": { "field": "url" }}}
 }'
```
#### 访问最多的IP排名
```shell
# 所有IP分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"23/May/2018:00:00:00 +0800"
  }}}}},
  "aggs": {"all_ips": {"terms": { "field": "ip" , "size":10 }}}
}'
 
# 昨日IP分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"25/May/2020:00:00:00 +0800",
    "lte":"26/May/2020:00:00:00 +0800"
  }}}}},
  "aggs": {"all_ips": {"terms": { "field": "ip" , "size":10 }}}
}'
 
# 今日IP分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"7/Sep/2020:00:00:00 +0800",
    "lte":"8/Sep/2020:00:00:00 +0800"
  }}}}},
  "aggs": {"all_ips": {"terms": { "field": "ip" , "size":10 }}}
}'

```

1. doc_count_error_upper_bound表示的是每个分片返回的最小的数量总和，比如这里的6就是第一个分片中的d中的4加上第二分片中的b中的2。也就是说ES认为那些本应该返回回来的文档假设它在每个分片上的最大值就是返回的最小值。
2. sum_other_doc_count就是总文档数量减去返回的文档总数量。

#### 访问最多的URL排名
```shell
# 所有URL分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"23/May/2018:00:00:00 +0800"
  }}}}},
  "aggs": {"all_ips": {"terms": { "field": "url" , "size":10 }}}
}'
 
# 昨日URL分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"25/May/2020:00:00:00 +0800",
    "lte":"26/May/2020:00:00:00 +0800"
  }}}}},
  "aggs": {"all_ips": {"terms": { "field": "url" , "size":10 }}}
}'
 
# 今日URL分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"8/Jun/2020:00:00:00 +0800",
    "lte":"9/Jun/2020:00:00:00 +0800"
  }}}}},
  "aggs": {"all_ips": {"terms": { "field": "url" , "size":10 }}}
}'
#########################################################
# 某个IP所有URL分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{
  "filter":{
  	"bool":{
    "must":[{"term":{"ip":"101.132.122.94"}},
      {"range":{"ts":{
        "gte":"23/May/2018:00:00:00 +0800"
      }}}
      ]
    }
  }
  }},
  "aggs": {"all_ips": {"terms": { "field": "url" , "size":10 }}}
}'
# 某个IP今日URL分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{"constant_score":{
  "filter":{
  	"bool":{
    "must":[{"term":{"ip":"114.115.190.201"}},
      {"range":{"ts":{
        "gte":"7/Sep/2020:00:00:00 +0800",
        "lte":"8/Sep/2020:00:00:00 +0800"
      }}}
      ]
    }
  }
  }},
  "aggs": {"all_ips": {"terms": { "field": "url" , "size":10 }}}
}'


```

#### ip和url查询列表
```shell
# 
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 10,"sort": [{"ts": {"order": "desc"}}], 
  "query":{"constant_score":{
  "filter":{
  	"bool":{
    "must":[{"term":{"ip":"113.110.165.243"}},
    	{"term":{"url":"/usrCloud/datadic/getDatas"}},
      {"range":{"ts":{
        "gte":"11/Jun/2020:00:00:00 +0800",
        "lte":"12/Jun/2020:00:00:00 +0800"
      }}}
      ]
    }
  }
  }}
}'
```

#### 访问浏览器类型分类及数量
```shell
# 所有浏览器分类及调用次数
curl -XGET 'http://127.0.0.1:9200/rc_nginx_api/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"22/May/2018:00:00:00 +0800"
  }}}}},
  "aggs": {"all_uajnames": {"terms": { "field": "uaj.name" , "size":100 }}}
 }'
# 昨日浏览器分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"22/May/2020:00:00:00 +0800",
    "lte":"23/May/2020:00:00:00 +0800"
  }}}}},
  "aggs": {"all_uajnames": {"terms": { "field": "uaj.name" , "size":10 }}}
 }'
```
#### 访问浏览器Chrome版本及数量
```shell
# 所有浏览器分类及调用次数
curl -XGET 'http://127.0.0.1:9200/rc_nginx_api/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"22/May/2018:00:00:00 +0800"
  }}}}},
  "aggs": {"all_uajoss": {"terms": { "field": "uaj.major" , "size":10 }}}
 }'
# 昨日浏览器分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"22/May/2020:00:00:00 +0800",
    "lte":"23/May/2020:00:00:00 +0800"
  }}}}},
  "aggs": {"all_uajoss": {"terms": { "field": "uaj.major" , "size":10 }}}
 }'
```
#### 访问操作系统类型分类及数量
```shell
# 所有操作系统分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{
  	"constant_score":{
    	"filter":{
      	"bool":{
        	"must":[
            {"range":{"ts":{
            	"gte":"22/May/2018:00:00:00 +0800"
            }}}
          ]
        }
      }
        }},
  "aggs": {"all_uajoss": {"terms": { "field": "uaj.os" , "size":100 }}}
 }'
```
#### 访问最多的国家排名
```shell
# 所有访问国家分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"22/May/2018:00:00:00 +0800"
  }}}}},
  "aggs": {"all_uajoss": {"terms": { "field": "ipj.country_name" , "size":10 }}}
}'
# 昨日访问国家分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"1/Jun/2020:00:00:00 +0800",
    "lte":"2/Jun/2020:00:00:00 +0800"
  }}}}},
  "aggs": {"all_uajoss": {"terms": { "field": "ipj.country_name" , "size":10 }}}
}'
```
#### 访问最多的省份排名
```shell
# 所有访问省份分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 10,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"22/May/2018:00:00:00 +0800"
  }}}}},
  "aggs": {"all_uajoss": {"terms": { "field": "ipj.region_name" , "size":10 }}}
}'
# 昨日访问省份分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"31/May/2020:00:00:00 +0800",
    "lte":"2/Jun/2020:00:00:00 +0800"
  }}}}},
  "aggs": {"all_uajoss": {"terms": { "field": "ipj.region_name" , "size":10 }}}
}'
```
#### 访问最多的城市排名
```shell
# 所有访问城市分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
    "gte":"22/May/2018:00:00:00 +0800"
  }}}}},
  "aggs": {"all_uajoss": {"terms": { "field": "ipj.city_name" , "size":10 }}}
}'
# 昨日访问城市分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
    "gte":"1/Jun/2020:00:00:00 +0800",
    "lte":"2/Jun/2020:00:00:00 +0800"
  }}}}},
  "aggs": {"all_uajoss": {"terms": { "field": "ipj.city_name" , "size":10 }}}
}'
```
#### HTTP响应码非200数量及列表
```shell
# 所有HTTP响应码非200列表
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 100,
  "query":{
  	"constant_score":{
    	"filter":{
      	"bool":{
        	"must_not":[
        		{"term":{"code":"200"}}
          ],
          "must":[
          	{"range":{"ts":{
            	"gte":"22/May/2018:00:00:00 +0800"
            }}}
          ]
        }
      }
        }}
 }'
 
 
# 昨日HTTP响应码非200列表
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 10,
  "query":{
  	"constant_score":{
    	"filter":{
      	"bool":{
        	"must_not":[
        		{"term":{"code":"200"}}
          ],
          "must":[
          	{"range":{"ts":{
            	"gte":"25/May/2020:00:00:00 +0800",
    					"lte":"26/May/2020:00:00:00 +0800"
            }}}
          ]
        }
      }
        }}
 }'
 

# 所有HTTP响应码非200分类及调用数量
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{
  	"constant_score":{
    	"filter":{
      	"bool":{
        	"must_not":[
        		{"term":{"code":"200"}}
          ],
          "must":[
          	{"range":{"ts":{
            	"gte":"22/May/2018:00:00:00 +0800"
            }}}
          ]
        }
      }
        }},
  "aggs": {"all_uajoss": {"terms": { "field": "code" , "size":100 }}}
 }'


# 昨日HTTP响应码非200分类及调用数量
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{
  	"constant_score":{
    	"filter":{
      	"bool":{
        	"must_not":[
        		{"term":{"code":"200"}}
          ],
          "must":[
          	{"range":{"ts":{
            	"gte":"22/May/2020:00:00:00 +0800",
    					"lte":"23/May/2020:00:00:00 +0800"
            }}}
          ]
        }
      }
        }},
  "aggs": {"all_uajoss": {"terms": { "field": "code" , "size":100 }}}
 }'


# 所有HTTP响应码非200(499)url分类及调用数量
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{
  	"constant_score":{
    	"filter":{
      	"bool":{
        	"must":[{"term":{"code":"499"}},
            {"range":{"ts":{
            "gte":"22/May/2018:00:00:00 +0800"
            }}}
          ]
        }
      }
        }},
  "aggs": {"all_uajoss": {"terms": { "field": "url" , "size":10 }}}
 }'
 
# 昨日HTTP响应码非200(499)url分类及调用数量
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{
  	"constant_score":{
    	"filter":{
      	"bool":{
        	"must":[{"term":{"code":"499"}},
            {"range":{"ts":{
            "gte":"22/May/2020:00:00:00 +0800",
    					"lte":"23/May/2020:00:00:00 +0800"
            }}}
          ]
        }
      }
        }},
  "aggs": {"all_uajoss": {"terms": { "field": "url" , "size":10 }}}
 }'


# 所有HTTP响应码非200(404)url分类及调用数量
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{
  	"constant_score":{
    	"filter":{
      	"bool":{
        	"must":[{"term":{"code":"404"}},
            {"range":{"ts":{
            "gte":"22/May/2018:00:00:00 +0800"
            }}}
          ]
        }
      }
        }},
  "aggs": {"all_uajoss": {"terms": { "field": "url" , "size":10 }}}
 }'

# 昨日HTTP响应码非200(404)url分类及调用数量
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{
  	"constant_score":{
    	"filter":{
      	"bool":{
        	"must":[{"term":{"code":"404"}},
            {"range":{"ts":{
            "gte":"22/May/2020:00:00:00 +0800",
    					"lte":"23/May/2020:00:00:00 +0800"
            }}}
          ]
        }
      }
        }},
  "aggs": {"all_uajoss": {"terms": { "field": "url" , "size":10 }}}
 }'
```
#### HTTP method分类及调用次数
```shell
# 所有HTTP method分类及数量
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"22/May/2018:00:00:00 +0800"
  }}}}},
  "aggs": {"all_uajnames": {"terms": { "field": "method" , "size":10 }}}
 }'
```

#### site分类及调用次数
```shell
# 所有site分类及数量
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"22/May/2018:00:00:00 +0800"
  }}}}},
  "aggs": {"all_uajnames": {"terms": { "field": "site" , "size":100 }}}
}'
# 某个IP今日site分类及调用次数
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,"sort": [{"ts": {"order": "desc"}}], 
  "query":{"constant_score":{
  "filter":{
  	"bool":{
    "must":[{"term":{"ip":"114.115.190.196"}},
      {"range":{"ts":{
        "gte":"8/Jun/2020:00:00:00 +0800",
        "lte":"9/Jun/2020:00:00:00 +0800"
      }}}
      ]
    }
  }
  }},
  "aggs": {"all_ips": {"terms": { "field": "site" , "size":10 }}}
}' 
```

#### httpv分类及调用次数
```shell
# 所有HTTP method分类及数量
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 1,
  "query":{"constant_score":{"filter":{"range":{"ts":{
  	"gte":"22/May/2018:00:00:00 +0800"
  }}}}},
  "aggs": {"all_uajnames": {"terms": { "field": "httpv" , "size":10 }}}
 }'
```

#### URL访问IP分类及调用次数
```shell
# URL访问IP分类及调用次数--查询历史记录
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{
  "filter":{
  	"bool":{
    "must":[{"term":{"url":"/usrCloud/dev/getDeviceDataPointHistory"}},
      {"range":{"ts":{
        "gte":"8/Jun/2020:00:00:00 +0800",
        "lte":"9/Jun/2020:00:00:00 +0800"
      }}}
      ]
    }
  }
  }},
  "aggs": {"all_urls": {"terms": { "field": "ip" }}}
}'

# URL访问IP分类及调用次数--登录
curl -XGET 'http://127.0.0.1:9200/{具体的es库}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{"constant_score":{
  "filter":{
  	"bool":{
    "must":[{"term":{"url":"/usrCloud/user/login"}},
      {"range":{"ts":{
        "gte":"8/Jun/2020:00:00:00 +0800",
        "lte":"9/Jun/2020:00:00:00 +0800"
      }}}
      ]
    }
  }
  }},
  "aggs": {"all_urls": {"terms": { "field": "ip" }}}
}'
```

#### 最活跃的某类site
```shell
#10大最活跃的分享组态
curl -XPOST 'http://127.0.0.1:9200/{具体的e's}/_search?pretty' \
-H "Content-Type: application/json" \
-d \
'{"size" : 0,
  "query":{
    "wildcard": {
      "site": "*show.html*share*"
    }
  },
  "aggs": {"all_ips": {"terms": { "field": "site" , "size":100 }}}
}'
```


