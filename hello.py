from flask import Flask, render_template, redirect, url_for
app = Flask(__name__)

@app.route('/')
def mainPage():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact')
def contact():
    return redirect(url_for('mainPage')+'#contact')