# Elasticsearch, Logstash, Kibana - Tool
This tool is used to setup a local instance of the ELK stack for logging debugging.

## Running the Tool
`docker-compose up elk`

## Viewing Logs
Navigate to `localhost:5601` to open Kibana.

## Troubleshooting
On some systems, `vm.max_map_count` may need to be set to `262144` in order for elasticsearch to start. There are many resources online showing how to resolve this error.
