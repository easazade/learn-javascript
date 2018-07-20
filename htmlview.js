function showSourceFrom(html) {
    let source = html;
    //now we need to escape the html special chars, javascript has escape
    //but this does not do what we want
    source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;" + "\n");
    //now we add <pre> tags to preserve whitespace
    source = "<pre>" + source + "</pre>";
    //now open the window and set the source as the content
    let sourceWindow = window.open('', 'Source of page', 'height=800,width=800,scrollbars=1,resizable=1');
    sourceWindow.document.write(source);
    sourceWindow.document.close(); //close the document for writing, not the window
    //give source window focus
    if (window.focus) sourceWindow.focus();
}

function showSource() {
    let source = "<html>";
    source += document.getElementsByTagName('html')[0].innerHTML;
    source += "</html>";
    //now we need to escape the html special chars, javascript has escape
    //but this does not do what we want
    source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    //now we add <pre> tags to preserve whitespace
    source = "<pre>" + source + "</pre>";
    //now open the window and set the source as the content
    let sourceWindow = window.open('', 'Source of page', 'height=800,width=800,scrollbars=1,resizable=1');
    sourceWindow.document.write(source);
    sourceWindow.document.close(); //close the document for writing, not the window
    //give source window focus
    if (window.focus) sourceWindow.focus();
}

showSourceFrom("<html><p>hello this is a good day for all of us</p></html>");