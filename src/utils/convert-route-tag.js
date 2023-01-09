export function convertRouteTag(tagRouting) {
    switch(tagRouting) {
        case 'art': return 'Арт';
        case 'text': return 'Тексты';
        case 'comix': return 'Комикс';
        default: return '';
    }
}

export function convertTagToRoute(nameTag) {
    switch(nameTag) {
        case 'Арт': return 'art';
        case 'Тексты': return 'text';
        case 'Комикс': return 'comix';
        default: return '';
    }
}