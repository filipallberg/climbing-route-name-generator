from selenium import webdriver
import os
import shutil

cwd = os.path.dirname(os.path.realpath(__file__))
output_dir = 'img'
shutil.rmtree(output_dir)
os.mkdir(cwd + '/' + output_dir)

names = [
    'Alex Honnold', # Because most people know who that is
    'Chris Sharma', # Because I'd like to climb like Sharma
    'Margo Hayes', # Because her work ethic inspires me
    'Göran Kropp', # Because everyone should know someone biked to Everest
    'Marian Smoluchowski', # Because there is no description for him and I like to see how that renders
    'Lynn Hill', 
]

def visit_site(name):
    browser.get('file://' + cwd + '/index.html?name=' + name)

def save_screenshot(filename):
    browser.save_screenshot(output_dir + '/' + filename + '.png')

browser = webdriver.Firefox()

for name in names:
    visit_site(name)
    save_screenshot(name.lower().split(' ')[1] + '-desktop')

browser.set_window_size(360, 740)

for name in names:
    visit_site(name)
    save_screenshot(name.lower().split(' ')[1] + '-mobile')

browser.close()
