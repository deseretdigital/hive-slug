const slug = require('../index.js');

describe('slug', () => {
    describe('default options', () => {
        it ('will remove trailing spaces and leading spaces', () => {
            expect(slug(' this is my test ')).toEqual('this-is-my-test');
        });
        it ('will remove non-standard characters', () => {
            expect(slug(' this$is$my$test ')).toEqual('this-is-my-test');
        });
        it ('does not introduce new spaces', () => {
            expect(slug('this is my test')).toEqual('this-is-my-test');
        });
        it ('replaces multiple spaces with one replacement character by default', () => {
            expect(slug('this  is  my  test')).toEqual('this-is-my-test');
        });
        it ('does not replace underscores', () => {
            expect(slug('this__is__my__test')).toEqual('this__is__my__test');
        });
        it ('does not replace hyphens', () => {
            expect(slug('this--is--my-test')).toEqual('this--is--my-test');
        });
        it ('does replace hyphens at the end', () => {
            expect(slug('this--is--my-test---')).toEqual('this--is--my-test');
        });
        it ('does replace underscores at the end', () => {
            expect(slug('this--is--my-test_-_-_')).toEqual('this--is--my-test');
        });
    });
    describe('option: removeTrailingSpaces=false', () => {
        it ('will not remove trailing spaces & replacements', () => {
            expect(slug(' this is my test ', { removeTrailingSpaces: false })).toEqual('this-is-my-test-');
        });
        it ('will not remove hyphens', () => {
            expect(slug(' this is my test----', { removeTrailingSpaces: false })).toEqual('this-is-my-test----');
        });
    });
    describe('Will replace characters in smart ways', () => {
        it ('will not remove á, ó etc', () => {
            expect(slug('Hola, ¿cómo estás?')).toEqual('hola-como-estas');
        });
    });
});
