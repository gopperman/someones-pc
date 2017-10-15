#!/bin/bash
url="http://serebii.net/pokedex-sm/icon/"
png=".png"
for i in $(seq 1 801)
do
	wget $url$i$png
done

mv *.png ../img/dex
