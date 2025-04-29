
# OSINT Ohio

## Challenges
Six challanges that included panaromas from ohio. I used https://renderstuff.com/tools/360-panorama-web-viewer/ to view the panaroma and find clues. Also revere image search tools and google maps.  

1. Beauty
2. The Master
3. The Blueprint
4. Sunshine
5. swag-like-ohio
6. Gerard-Manley-Hopkins


## swag-like-ohio

![alt text](swag-like-ohio.jpg)

### Description 
swag like ohio. down in ohio. swag like ohio. down in ohio. anyway we seem to be on a bridge. what's the address of the bridge?

flag will look like: UMDCTF{Boulder Bridge, Washington, DC 20008}

### Solution

Zooming into this panoramic photo, we see a clock tower. Reverse image searching we got Marietta, Ohio.

Looking for bridges near the clock tower we found it. 

Flag: `UMDCTF{Putnam Bridge, Marietta, OH 45750}`


## sunshine
![alt text](sunshine.jpg)
### Description 

what a nice sunny day. what is the full address of house number 356? flag will look like: UMDCTF{3983 Campus Dr, College Park, MD 20742}

flag will look like: UMDCTF{3983 Campus Dr, College Park, MD 20742}

### Solution

This challenge's brainrot UI reel has the "you are my sunshine" meme by LeBron James. Because this challenge requires the complete address of house 356, and there are several references to sunshine despite the fact that it is a cloudier day with no noticeable sun, we can search "LeBron Ohio House 356" to get multiple articles regarding the Akron house.

When we did reverse image search of the house 356. The results confirm that it is LeBron's childhood home in Akron, Ohio.

Flag: `UMDCTF{356 Hillwood Dr, Akron, OH 44320}`

## the-master
![alt text](the-master.jpg)
### Description 

trust me bro, i know what im talking about. im the master when it comes to these things. what street are we on?

flag will look like: UMDCTF{Campus Dr, College Park, MD 20742}

### Solution

If you zoom in there is a sign on the pole. When reverse search the pole we found that it is pretty similar to the "John Hunt Morgan Heritage Trail" signs. Looking for the trail in ohio we found different location where these markers are located - https://www.hmdb.org/results.asp?Search=Series&SeriesID=364, there are total 56 Historical Markers, but manually searching around each one on google maps was tiring, there must be another way. 

Additionally, the brick building looke a bit uniques when reverse image searching the brick building it showed a match with wikimedia file for the United Methodist Church in Lore City, OH, located on Main St., Lore City, OH.

Flag: `UMDCTF{Main St, Lore City, OH 43755}`

## beauty
![alt text](beauty.jpg)
### Description 
truly a beautiful panorama. ohio is not always ugly. i really wanna know who made this pano tho. what's their name?

flag will look like: UMDCTF{Darryll Pines}

### Solution
After doing some reverse image search foud out that it is in volumbai ohio on the river. The iamge seems to be taken from a drone or something.  Since the challenege need the persons name, thought to check google maps. Got the flag from person name. 
Then going there there was just a single panorama view over the river
![alt text](image-1.png)

The poster of this photosphere is Neil Larimore.

Flag: `UMDCTF{Neil Larimore}`

## gerard-manley-hopkins
![alt text](gerard-manley-hopkins.jpg)
### Description 
as kingfishers catch fire, dragonflies draw flame; as tumbled over rim in roundy wells stones ring; like each tucked string tells, each hung bell's bow swung finds tongue to fling out broad its name; each mortal thing does one thing and the same: deals out that being indoors each one dwells; selves - goes itself; myself it speaks and spells, crying what i do is me: for that i came. i say more: the just man justices; keeps grace: that keeps all his goings graces; acts in god's eye what in god's eye he is - christ - for christ plays in ten thousand places, lovely in limbs, and lovely in eyes not his to the father through the feature of men's faces. sorry i just really like poetry. what road are we on? 

flag will look like: `UMDCTF{Campus Dr, College Park, MD 20742}`

### Solution

Gerard Manley Hopkins was an English poet. He wrote the  poem "As Kingfishers Catch Fire" in 1877, while living in a pastoral community in Wales. Kingfishers are waterbirds famed for their ability to dive and hunt fish. However he had no relation with ohio oe as such. This poem is in one of school curriculum in ohio. But that didnt lead anywhere. 

In the panorama, we also see a garbage can labeled "Dailey's" and a phone number. When you search for the phone number, you will find Dailey's Recycling in Wellsville, Ohio.

Also, It appears that house 1116 on the left was painted more recently, possibly in preparation for sale. Zillow provides us with the address right away when we search for the house number using what we know (Wellsville), and we filter it down to the area between Esther Avenue and Hillcrest Road. It turned out to be Hillcrest.

Flag: `UMDCTF{Hillcrest Rd, Wellsville, OH 43968}`

## the-blueprint
![alt text](the-blueprint.jpg)
### Description 

### Solution
Unsolved

Tried several approaches to search the house in the background but no luck. The house seems to be a european style luxary home. 

### Solved by - aroha