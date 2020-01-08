import React from 'react';
import ReactDOM from 'react-dom';
/*
function mycomponent(){
    return(
        React.createElement('ul',{},React.createElement('li',{},'Test'),
        React.createElement('ul',{},React.createElement('li',{},'Result')),
        React.createElement('li',{},'Exam'),
        React.createElement('ul',{},React.createElement('li',{},'Result')))
    )
}
*/
function mycomponent(){
    return(
        React.createElement('p',{},'My Favourite Things',
         React.createElement('ul',{},React.createElement('li',{},'Favourite Colors'),
         React.createElement('ol',{},React.createElement('li',{},'Green'),
         React.createElement('li',{},'Blue'),
         React.createElement('li',{},'Red'))), 
        
        
         React.createElement('ul',{},React.createElement('li',{},'Favorite Music'),
         React.createElement('ol',{},React.createElement('li',{},'Regina Spektor'),
         React.createElement('li',{},'Antonín Dvořák'),
         React.createElement('li',{},'Radiohead'))),

         React.createElement('ul',{},React.createElement('li',{},'Favorite Food'),
         React.createElement('ol',{},React.createElement('li',{},'Pizza'),
         React.createElement('li',{},'Caesar Salad'),
         React.createElement('li',{},'Gnochhi'))),

         React.createElement('ul',{},React.createElement('li',{},'Favourite Websites'),
         React.createElement('ol',{},React.createElement('a',{href:'https://www.google.com/',target:'_blank'},'www.google.com'),
         React.createElement('li',{},React.createElement('a',{href:'https://www.facebook.com/',target:'_blank'},'www.facebook.com')),
         React.createElement('li',{},React.createElement('a',{href:'https://www.instagram.com/',target:'_blank'},'www.instagram.com'))))
   
         )
    )
}
export default mycomponent ;