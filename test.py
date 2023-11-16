#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jun 22 14:43:04 2022

@author: lizhong
"""
import numpy as np
from matplotlib import pyplot as plt
from matplotlib.animation import FuncAnimation
#plt.style.use('seaborn-pastel')


fig, axes = plt.subplots(3)


axes[0].set_xlim([-2, 4])
axes[1].set_xlim([-2, 4])
axes[2].set_xlim([-2, 4])
axes[0].set_ylim([-2, 2])
axes[1].set_ylim([-2, 2])
axes[2].set_ylim([-2, 2])


line0, = axes[0].plot([], [], lw=3)
line1, = axes[1].plot([], [], lw=3)
line2, = axes[2].plot([], [], lw=3)

xmin = -2.0
xmax = 4.0
nSteps = 1000
nFrames = 200
movieStepSize = (xmax - xmin)/ nFrames
computeStepSize = (xmax - xmin)/ nSteps

def init():
    line0.set_data([], [])
    line1.set_data([], [])
    line2.set_data([], [])

 
    return line0, line1, line2

def func1(x):
    
    y = (x<2) * (x>=0)
    return y

def func2(x):
    
    y = (x<1) * (x>=0)*1.5 
    #y = (x<1) * (x>=0)*1.5 + (x>1) * (x<1.5) * 0.5
    return y

def conv(x):

    y = np.zeros(nSteps,) # array of zeros
    
    f= func1(x) # boolean array
    
    for i in range(nSteps):
        z = i * computeStepSize + xmin
        g = func2(z-x)
        
        print(np.sum(f*g)* computeStepSize)
        y[i] = np.sum (f*g) * computeStepSize
    
    return (y)



x = np.linspace(xmin, xmax, nSteps) # array 

fcg = conv(x)
a = np.linspace(1,3,3)
print(a)
print(np.sum(a*a))
#anim = FuncAnimation(fig, animate, init_func=init,frames=nFrames, interval=40, blit=True)