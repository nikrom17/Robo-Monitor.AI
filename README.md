# Robo-<span>Monitor</span>.AI

Robot-Monitor is a smart error monitoring solution for industrial robot systems. One of the most fustrating components of having an automated system in your manucaturing process is when its not working. Our system was designed to detect the error using machine learning and relay the problem to the machine opperator. This eliminates the time it takes the opperator to figure out what is wrong with the system.

## Proposed Data Flow
![data_flow](https://raw.githubusercontent.com/nikrom17/Robo-Monitor.AI/master/img/IoT_hackathon_flow.jpg)

## Getting Started

This repo containts just the code for the HMI (human-machine interface) I wrote. This is the main interaction point between the robot opperation and the autonomus system. The HMI was build using React.

### Prerequisites

Tested on macOS High Sierra with gcc version 9.1.0

### Installing

1.  `git clone https://github.com/nikrom17/Robo-Monitor.AI.git`
2.  `cd Robo-Monitor.AI`
3.  run  `npm install`  to add all the required packagest to the directory
4.  run `npm start` to lauch React. The app should automatically launch in your default browser.

## HMI: Live Feed
Our hackathon concept was to place mutiple cameras in the robot cell to monitor its status. When everying is running smoothly, a live feed of the robot in action is displaced on the screen.

![main_screen](https://raw.githubusercontent.com/nikrom17/Robo-Monitor.AI/master/img/live.png)

## HMI: Error Screen

The error screen displays a log of the current or previous system faults. For the hackathon, we created a mock robot cell. In the images below, you will see a business card holder with a 2D welding robot cutout acting as the robot. The brown circular object is the robot's opperating table. The error images have the area of interest encased in a red box and a text description of the fault. <br>
![errors](https://raw.githubusercontent.com/nikrom17/Robo-Monitor.AI/master/img/errors.png)

## Authors

**Nikolaus Roman**


**Jacob Polloreno**


**Cristian Franco**
