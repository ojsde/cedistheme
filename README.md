# cedistheme

This plugin is currently tested, it is still UNRELEASED. Use it for demotration and testing purposes only. 

## About

An OJS theme that allows customizing the OJS default theme. 

## Settings

- Key Colour: for header background, primary navigation, links
- Secondary Colour: for headings, borders
- Neutral Colour: for footer background, sidebar background
- Header Bright/Dark: key colour for navigation only
- Header Logo Behaviour: logo vs. banner
- Hero: hero image, hero claim with hero claim colour and hero claim size option
- Journal Description: position of journal description on journal index page above or below announcements
- Sidbar position: left, right, off
- Headline Font: Arial, Georgia, Noto Sans, Noto Serif, Fira Sans, Source Sans Pro, Merriweather, Merriweather Sans
- Body Font: Arial, Georgia, Noto Sans, Noto Serif, Fira Sans, Source Sans Pro, Merriweather, Merriweather Sans
- Base Size: base size all spacings and font sizes are derived from
- Border Behaviour: full, clean, horizontal

## Installation
### Installalion via OJS GUI:
 - download cedistheme-[version].tar.gz from https://github.com/ojsde/cedistheme/releases
 - install plugin in OJS (journal management -> plugins -> „install new plugin“ -> upload cedistheme-[version].tar.gz)
 
### Installation via command line without Git:
 - download archive from https://github.com/ojsde/cedistheme
 - unzip the archive to plugins/themes and rename the main plugin folder to "cedistheme" if necessary
 - from your application's installation directory, run the upgrade script (it is recommended to back up your database first): 
   php tools/upgrade.php upgrade or php tools/installPluginVersion.php (see https://github.com/pkp/pkp-lib/issues/2503)

### Installation with Git:
 - cd [my_ojs_installation]/plugins/themes
 - git clone https://github.com/ojsde/cedistheme
 - cd cedistheme
 - git checkout [branch]
 - cd [my_ojs_installation]
 - php tools/upgrade.php upgrade or php tools/installPluginVersion.php (s. https://github.com/pkp/pkp-lib/issues/2503, it is recommended to back up your database first)

### Finishing
- copy or symlink the fonts folder in plugins/themes/cedistheme to the public folder of OJS 
  - cd [my_ojs_installation]
  - ln -s plugins/themes/cedistheme/fonts public/fonts

## Adjustments
### templates
- indexJournal.tpl
  - adjustments for Journal Description text
- header.tpl
  - implementation of hero template
  - added .is_text site name
- hero.tpl
  - small template file for hero function

## Note
Please be aware that the multitude of options and possible combinations cannot be always fool proof. Not every possible combination may be practical. Choose especially colours carefully. If necessary make use of the journal style sheet.

Contact/Support
---------------
Documentation, bug listings, and updates can be found on this plugin's homepage
at <http://github.com/ojsde/cedistheme>.

