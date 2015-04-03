# Data Driven Simulation Management Database

DDSM is a python platform for displaying and manipulating data
generated by a simulation management tool. This repository holds the
model and launches the database needed for the app. It works in
conjunction with
[ddsm-api](https://github.com/data-driven-science/ddsm-api),
[ddsm-cloud](https://github.com/data-driven-science/ddsm-cloud) and
[ddsm-view](https://github.com/data-driven-science/ddsm-view).

## Usage

To create a new database use:

    $ python handle.py --create

To run an already exisiting database use:

    $ python handle.py --run

To remove the data from an exisiting database use:

    $ python handle.py --clean

To remove a database entirely use:
  
    $ python handle.py --destroy

## Testing

Use:

    $ nosetests

## License

[The MIT license.][LICENSE]

## Prerequisites and Installation

See the [installation guide](INSTALLATION.md).

## Local Instance

To set up a local instance of the database, use

    mongod --config /path/to/mongodb.conf

where the contents of `mongodb.conf` is

    dbpath = /home/wd15/.mongodb
