var expect = require("chai").expect;
var saveVarazsigeMW = require("../../../../middlewares/varazsige/saveVarazsigeMW");

describe("saveVarazsigeMW middleware ", function () {
    it("should set res.locals.spell with a spell", function (done) {
        const mv = saveVarazsigeMW({
            Spell: 'ujvarazsige'
        });

        mv({
                body: {
                    name: 'abrakadabra',
                    duration: 5,
                    wandNeeded: true
                },
                params: {
                    varazsigeid: '13'
                }

            },
            {
                locals: {
                    spell: {
                        save: (cb) => {
                            cb(null);
                        }
                    }
                },

                redirect: (where) => {
                    expect(where).to.be.equal('/varazsige');
                    done();
                }
            },
            err => {

            });
    });

    describe("saveVarazsigeMW middleware ", function () {
        it("should call next with err if there is a db error", function (done) {
            const mv = saveVarazsigeMW({
                Spell: 'ujvarazsige'
            });

            mv({
                    body: {
                        name: 'abrakadabra',
                        duration: 5,
                        wandNeeded: true
                    },
                    params: {
                        varazsigeid: '13'
                    }

                },
                {
                    locals: {
                        spell: {
                            save: (cb) => {
                                cb('adatbazishiba');
                            }
                        }
                    },

                    redirect: (where) => {

                    }
                },
                err => {
                    expect(err).to.be.equal('adatbazishiba');
                    done();
                });
        });
    });

    describe("saveVarazsigeMW middleware ", function () {
        it("should call next with num err on duration param", function (done) {
            const mv = saveVarazsigeMW({
                Spell: 'ujvarazsige'
            });

            mv({
                    body: {
                        name: 'abrakadabra',
                        duration: "papa",
                        wandNeeded: true
                    },
                    params: {
                        varazsigeid: '13'
                    }

                },
                {
                    locals: {
                        spell: {
                            save: (cb) => {
                                cb(null);
                            }
                        }
                    },

                    redirect: (where) => {

                    }
                },
                err => {
                    expect(err).to.be.instanceof(Error);
                    expect(err.toString()).to.be.eql('Error: A duration szammal legyen megadva!');
                    done();
                });
        });
    });

    describe("saveVarazsigeMW middleware ", function () {
        it("should set res.locals.spell with a spell created by the MW", function (done) {

            class SpellMockModel {
                save(cb) {
                    cb(null);
                }
            }

            const mv = saveVarazsigeMW({
                Spell: SpellMockModel
            });

            mv({
                    body: {
                        name: 'abrakadabra',
                        duration: 5,
                        wandNeeded: true
                    },
                    params: {
                        varazsigeid: '13'
                    }

                },
                {
                    locals: {
                        spell: {
                            save: (cb) => {
                                cb(null);
                            }
                        }
                    },

                    redirect: (where) => {
                        expect(where).to.be.eql('/varazsige');
                        done();
                    }
                },
                err => {

                });
        });
    });

    describe("saveVarazsigeMW middleware ", function () {
        it("should set res.locals.spell with an undefined because of name is undefined", function (done) {
            const mv = saveVarazsigeMW({
                Spell: 'ujvarazsige'
            });

            const resMock = {
                locals: {
                },
            };

            mv({
                    body: {
                        name: undefined,
                        duration: 5,
                        wandNeeded: true
                    },
                    params: {
                        varazsigeid: '13'
                    }

                },
                {
                    resMock,
                    redirect: (where) => {
                    }
                },
                err => {
                    expect(resMock.locals.spell).to.be.an('undefined');
                    done();
                });
        });

        describe("saveVarazsigeMW middleware ", function () {
            it("should set res.locals.spell with an undefined because of duration is undefined", function (done) {
                const mv = saveVarazsigeMW({
                    Spell: 'ujvarazsige'
                });

                const resMock = {
                    locals: {},
                };

                mv({
                        body: {
                            name: "abrakadabra",
                            duration: undefined,
                            wandNeeded: true
                        },
                        params: {
                            varazsigeid: '13'
                        }

                    },
                    {
                        resMock,
                        redirect: (where) => {
                        }
                    },
                    err => {
                        expect(resMock.locals.spell).to.be.an('undefined');
                        done();
                    });
            });
        });
    });
});