// Based on https://codepen.io/vidhill/pen/bNPEmX

document.getElementById('download_button').onclick = function(event){

    let data = document.getElementById('app').getElementsByClassName('cff')[0].value;

    let json = JSON.stringify(data),
    blob = new Blob([json], {type: "octet/stream"}),
    url = window.URL.createObjectURL(blob);

    this.href = url;
    this.target = '_blank';

    // target filename
    this.download = 'CITATION.cff';
}
