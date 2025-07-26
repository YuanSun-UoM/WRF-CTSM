# Docs

```bash
# conda install sphinx-book-theme recommonmark sphinx myst-nb
# pip install sphinx_design
conda activate testingenv
export GITHUB_DIR=/Users/user/Desktop/YuanSun-UoM/
export REPO_NAME=WRF-CTSM
export GITROPO_DIR=${GITHUB_DIR}${REPO_NAME}/
export DOCS_DIR=${GITROPO_DIR}docs/
mkdir -r docs
cd ${DOCS_DIR}
sphinx-quickstart

> Separate source and build directories (y/n) [n]: y
> Project name: WRF-CTSM
> Author name(s): Yuan Sun
> Project release []:

sphinx-build -b html ${DOCS_DIR}source ${DOCS_DIR}_build
open ${DOCS_DIR}_build/index.html
```

- change docs style in `conf.py`

- For GitHub, enable **Discussions** and add **issue templates** in **Settings**.