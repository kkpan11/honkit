# Generating eBooks and PDFs

HonKit can generate a website, but can also output content as ebook (ePub, Mobi, PDF).

```
# Generate a PDF file
$ honkit pdf ./ ./mybook.pdf

# Generate an ePub file
$ honkit epub ./ ./mybook.epub

# Generate a Mobi file
$ honkit mobi ./ ./mybook.mobi
```

### Installing ebook-convert

`ebook-convert` is required to generate ebooks (epub, mobi, pdf).

##### OS X

Download the [Calibre application](https://calibre-ebook.com/download). After moving the `calibre.app` to your Applications folder create a symbolic link to the ebook-convert tool:

```
$ sudo ln -s /Applications/calibre.app/Contents/MacOS/ebook-convert /usr/local/bin
```

You can replace `/usr/bin` with any directory that is in your $PATH.

### Cover

Covers are used for all the ebook formats.

To provide a cover, place a **`cover.jpg`** file at the root directory of your book. Adding a **`cover_small.jpg`** will specify a smaller version of the cover. The cover should be a **JPEG** file.

A good cover should respect the following guidelines:

* Size of 1800x2360 pixels for `cover.jpg`, 200x262 for `cover_small.jpg`
* No border
* Clearly visible book title
* Any important text should be visible in the small version
