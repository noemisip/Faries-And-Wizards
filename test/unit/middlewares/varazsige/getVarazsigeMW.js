var expect = require("chai").expect;
var getVarazsigeMW = require("../../../../middlewares/varazsige/getVarazsigeMW");

describe("getVarazsigeMW middleware ", function () {
    it("should set res.locals.spell with a spell object from db", function (done) {

        const mv = getVarazsigeMW({
            Spell: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({ _id: '13' });
                    cb(null,'mockspell');
                }
            }
        });
        const resMock = {
            locals: {}
        };

        mv({
                params: {
                    varazsigeid: '13'
                }

            },
            resMock,
            (err) => {
                expect(resMock.locals).to.be.eql({ spell: 'mockspell' });
                done();
            });
    });



    it("should call next with error when there is a db problem", function (done) {
        const mv = getVarazsigeMW({
            Spell: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({ _id: '13' });
                    cb('adatbazishiba', null);
                }
            }
        });
        const resMock = {
            locals: {}
        };

        mv({
                params: {
                    varazsigeid: '13'
                }

            },
            resMock,
            (err) => {
                expect(err).to.be.eql('adatbazishiba');
                done();
            });
    });


    it("should call next when no spell found in the db", function (done) {
        const mv = getVarazsigeMW({
            Spell: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({ _id: '13' });
                    cb(undefined,null);
                }
            }
        });
        const resMock = {
            locals: {}
        };

        mv({
                params: {
                    varazsigeid: '13'
                }

            },
            resMock,
            (err) => {
                expect(err).to.be.equal(undefined);
                expect(resMock.locals).to.be.eql({});
                done();
            });
    });
});