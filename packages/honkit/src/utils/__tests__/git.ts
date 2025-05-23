import path from "path";
import Git from "../git";

describe("Git", () => {
    describe("URL parsing", () => {
        test("should correctly validate git urls", () => {
            // HTTPS
            expect(Git.isUrl("git+https://github.com/Hello/world.git")).toBeTruthy();

            // SSH
            expect(
                Git.isUrl(
                    "git+git@github.com:GitbookIO/gitbook.git/directory/README.md#e1594cde2c32e4ff48f6c4eff3d3d461743d74e1"
                )
            ).toBeTruthy();

            // Non valid
            expect(Git.isUrl("https://github.com/Hello/world.git")).toBeFalsy();
            expect(Git.isUrl("README.md")).toBeFalsy();
        }, 60 * 1000);

        test("should parse HTTPS urls", () => {
            const parts = Git.parseUrl("git+https://gist.github.com/69ea4542e4c8967d2fa7.git/test.md");

            expect(parts.host).toBe("https://gist.github.com/69ea4542e4c8967d2fa7.git");
            expect(parts.ref).toBe(null);
            expect(parts.filepath).toBe("test.md");
        }, 60 * 1000);

        test("should parse HTTPS urls with a reference", () => {
            const parts = Git.parseUrl("git+https://gist.github.com/69ea4542e4c8967d2fa7.git/test.md#1.0.0");

            expect(parts.host).toBe("https://gist.github.com/69ea4542e4c8967d2fa7.git");
            expect(parts.ref).toBe("1.0.0");
            expect(parts.filepath).toBe("test.md");
        }, 60 * 1000);

        test("should parse SSH urls", () => {
            const parts = Git.parseUrl(
                "git+git@github.com:GitbookIO/gitbook.git/directory/README.md#e1594cde2c32e4ff48f6c4eff3d3d461743d74e1"
            );

            expect(parts.host).toBe("git@github.com:GitbookIO/gitbook.git");
            expect(parts.ref).toBe("e1594cde2c32e4ff48f6c4eff3d3d461743d74e1");
            expect(parts.filepath).toBe("directory/README.md");
        }, 60 * 1000);
    });

    describe("Cloning and resolving", () => {
        test("should clone an HTTPS url", () => {
            const git = new Git();
            return git.resolve("git+https://gist.github.com/69ea4542e4c8967d2fa7.git/test.md").then((filename) => {
                expect(path.extname(filename)).toBe(".md");
            });
        }, 60 * 1000);
    });
});
