# cedistheme

This plugin is currently tested, it is still UNRELEASED. Use it for demotration and testing purposes only. 

## About

An OJS theme that allows customizing the OJS default theme. 

## Settings

Key Colour: for header background, primary navigation, links
Socondary Colour: for headings, borders
Neutral Colour: for footer background, sidebar background
Header Bright/Dark: key colour for navigation only
Header Logo Behaviour: logo vs. banner
Hero: hero image, hero claim with hero claim colour
Journal Description: position of journal description on journal index page
Sidbar position: left, right, off
Headline Font: Arial, Georgia, Noto Sans, Noto Serif, Fira Sans, Source Sans Pro, Merriweather, Merriweather Sans
Spacings: spacings in px
Body Font: Arial, Georgia, Noto Sans, Noto Serif, Fira Sans, Source Sans Pro, Merriweather, Merriweather Sans
Border Behaviour: full, clean, horizontal, blocks

## Installation

Installalion via OJS GUI:
 - download cedistheme-[version].tar.gz from https://github.com/ojsde/cedistheme/releases
 - install plugin in OJS (journal management -> plugins -> „install new plugin“ -> upload cedistheme-[version].tar.gz)
 
Installation via command line without Git:
 - download archive from https://github.com/ojsde/cedistheme
 - unzip the archive to plugins/themes and rename the main plugin folder to "cedistheme" if necessary
 - from your application's installation directory, run the upgrade script (it is recommended to back up your database first): 
   php tools/upgrade.php upgrade or php tools/installPluginVersion.php (see https://github.com/pkp/pkp-lib/issues/2503)

Installation with Git:
 - cd [my_ojs_installation]/plugins/themes
 - git clone https://github.com/ojsde/cedistheme
 - cd dnb
 - git checkout [branch]
 - cd [my_ojs_installation]
 - php tools/upgrade.php upgrade or php tools/installPluginVersion.php (s. https://github.com/pkp/pkp-lib/issues/2503, it is recommended to back up your database first)

Contact/Support
---------------
Documentation, bug listings, and updates can be found on this plugin's homepage
at <http://github.com/ojsde/cedistheme>.

