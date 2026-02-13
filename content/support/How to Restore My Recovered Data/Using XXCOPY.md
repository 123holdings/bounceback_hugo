---
title: Using XXCOPY
description: >-
  Explore a full range of healthcare services at Oasis Clinics, including
  diagnostic tests, surgical procedures, chronic disease management, and
  wellness programs.
title_image: images/xxcopy.jpeg
booking_button:
  enable: true
  label: Start My Recovery Now
  url: "/start-my-recovery/"
---

## Description:

When it comes to transferring large amounts of data, it’s a good idea to use a good data copying tool. Without the right tool, some of your valuable data may not copy, and you may not find this out until your source files are long gone.

There are lots of tools out there, but for years we’ve found that the best and most straightforward tool to use is XXCOPY from Pixelab (www.xxcopy.com). This tool is by far the most well thought out and best functioning of any we’ve tested. We will list below some example commands and describe what they do.

Lets use an example of a customer who wants to copy all of their recovered data from an external drive to a folder on their “C” drive. As an example we’ll call their external drive the “G” drive on their computer (To find the actual drive letter of your recovered data drive, go to “My Computer”, find the drive that contains your recovered data by exploring the contents of all your drives. Once you see your recovered data, record the drive letter).

After you’ve gone to www.xxcopy.com and installed xxcopy you would open your “command prompt” to run an xxcopy command. To open the command prompt, click your start button, then to go “Programs” or “All Programs”, “accessories” and right click on “command prompt” to select “run as administrator”.

A good command to copy everything on the drive would be something like this:

xxcopy g:\*.\* c:\recovered /c /s /f /h /pb /bb

Here’s what all the little commands do after the “/” character:

/c – Copies directories and subdirectories, except empty ones. (use /e instead to copy empty ones too)
/s – Copies all subdirectories
/f – Displays the full source and destination file names while copying
/h – Copies hidden and/or system directories also.
/pb – Shows a progress bar to display the progress of the copying job
/bb – Does not copy files that already exist in the destination

We recommend that if you want to use any other commands to copy your data that you ask us first, we’ll be more than happy to walk you through the copying process.
