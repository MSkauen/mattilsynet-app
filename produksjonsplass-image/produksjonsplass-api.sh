#!/bin/bash
#sleep 10
#java -jar /app.jar 2>/tmp/api.err 1>/tmp/api.out
while true; do
	if [ -z "`openssl s_client localhost:8080 2>/dev/null| grep CONNECTED`" ]; then
		java -jar /app.jar 2>>/tmp/api.err 1>>/tmp/api.out;
		sleep 30;
	fi;
done;
