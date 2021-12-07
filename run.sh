#!/bin/bash
chmod +x ./next/next_setup.sh
chmod +x ./go/db_setup.sh
./next/next_setup.sh
./go/db_setup.sh
docker exec -itd db5th_next bash -c "yarn dev"