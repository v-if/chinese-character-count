function ccc(text) {
    let chinese = text.replace(/[a-zA-Z0-9\-\(\)\:\/]/g, '');
    let chinese_arr = chinese.match(/[\u00ff-\uffff]|\S+/g);

    return chinese_arr ? chinese_arr.length : 0;
}
