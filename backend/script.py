import os
import time

#Print statements are just for debugging purpose
#Final printed data will be based on the file produced after entire script runs

print("\nChecking dependencies...")

#Checking if all tools are present
path_assetfinder = '/root/pentest/Ath3na/assetfinder'
if os.path.isfile(path_assetfinder) == False:
	print("\nAssetfinder not found...Please run installation script.")

time.sleep(1)
print("\nAll tools in place. Let's get crackin!")
time.sleep(1)

#This will be the running directory with all the tools
os.system("cd /root/pentest/Ath3na/")

#Take input url, this can be made a console argument so that script can be run with url and not take input in the middle
url = input("\nEnter the URL: ")

#Use '>>' to append to temp.txt directly if there is no banner etc for the tool
#Output to appropriate text file if tool has banner 
#Shown both methods here

def assetfinder():
	#using pipe operator because console output does not have banner etc
	os.system("chmod +x assetfinder")
	asset = './assetfinder ' + url + ">temp.txt"
	os.system(asset)

def sublist3r():
	#ensure that dnscan and all sublist3r files are in the main directory with the script
	#using output file because banner etc is displayed on console
	main = open('temp.txt','a')
	sublister = 'python3 sublist3r.py -d ' +url+' -o sublister.txt'
	os.system(sublister)
	if os.path.isfile('/root/pentest/Ath3na/sublister.txt') == False:
		print("\nSublist3r has found no domains")
	else:
		sublister_file = open('sublister.txt','r')
		lines = sublister_file.readlines()
		for line in lines:
			main.write(line)
		sublister_file.close()
	main.close()

def duplicate_combine_subdomains():
	#Verify if the tool gives null output(no file created)
	#open all the files required
	#open only files of tools which produce subdomain names
	final = open('final.txt','w')
	f1 = open('temp.txt','r')


	if os.path.isfile('/root/pentest/Ath3na/sublister.txt') == False:
		print("\nNo sublist3r file")
		#I have placed this return because only 2 tools are there as of now, remove when multiple tools are added
		return;
	else:
		f2 = open('sublister.txt','r')

	f1_lines = set(f1.readlines())
	f2_lines = set(f2.readlines())
	#f3_lines = set(f3.readlines()) etc etc
	#use final_set = (f1_lines - f2_lines) + (f1_lines - f3_lines) + (f2_lines - f3_lines) etc and then add all of them to final file
	final_set = set(f1_lines).difference(f2_lines)
	for ele in final_set:
		final.write(ele)
	for ele in f2_lines:
		final.write(ele)	
	os.remove('temp.txt')
	os.remove('sublister.txt')
		


assetfinder()
sublist3r()

duplicate_combine_subdomains()

print("\nOutput written to file final.txt")
