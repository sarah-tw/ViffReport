# Viff Report

After you run 'viff xx.config.js', it will gernate a report.json file and screenshots folder which contain all the screenshots and the difference. To view all the difference easily, you may need Viff Report for help.

Under the help of Viff Report, you will see a report as bellow:
![alt text](/img/viff-report.jpeg)


## How to see my own report?
### Step 1 - Copy resource to ViffReport
Move the screenshots folder and report.json file under ViffReport/
In your terminal, 
```
mv screenshots/ ViffReport
mv report.json ViffReport
```
### Step 2 - Start server
```
cd ViffReport
python -m SimpleHTTPServer 3000
```
Note: You can use other way to start ViffReport server.

### Step 3 - Visit your browser
Go to your browser, visit localhost:3000


## More usage

ViffReport support keyboard shortcut, here is the list:
<table>
    <tbody>
        <tr>
            <td>Shortcut</td>
            <td>Function</td>
        </tr>
        <tr>
            <td>/</td>
            <td>Go to search input</td>
        </tr>
        <tr>
            <td>J</td>
            <td>Jump to next</td>
        </tr>
        <tr>
            <td>K</td>
            <td>Jump to previous</td>
        </tr>
        <tr>
            <td>L</td>
            <td>Jump to next browser cases</td>
        </tr>
        <tr>
            <td>H</td>
            <td>Jump to previous browser cases</td>
        </tr>
        <tr>
            <td>A, Ctrl+A</td>
            <td>Approve current case difference</td>
        </tr>
        <tr>
            <td>F</td>
            <td>Switch to Firefox screenshots</td>
        </tr>
        <tr>
            <td>C</td>
            <td>Switch to Chrome screenshots</td>
        </tr>        
        <tr>
            <td>I</td>
            <td>Switch to IE screenshots</td>
        </tr>
        <tr>
            <td>O</td>
            <td>Switch to Opera screenshots</td>
        </tr>
        <tr>
            <td>S</td>
            <td>Switch to Safari screenshots</td>
        </tr>         
    </tbody>
</table>


