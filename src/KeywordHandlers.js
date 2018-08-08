export function update_keyword(payload) {
    let keyword = this.keywords.find(function (keyword) {
        return keyword.id == payload.id;
    });
    keyword.text= payload.value;
}
