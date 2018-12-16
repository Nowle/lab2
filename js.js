form.onsubmit =function() {
    var canvas = new fabric.Canvas('c');
    var imgElement = document.getElementById('Image');
    var imgInstance = new fabric.Image(imgElement, {
        left: 100,
        top: 100,
        opacity: 0.85,
        width: document.getElementById('width')
        height: document.getElementById('height')
    });
    canvas.add(imgInstance);
}
