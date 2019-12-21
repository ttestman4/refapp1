# Creating Pull Request
1. ### Pickup [issue](https://github.com/ttestman4/refapp1/issues) from project work items
1. ### [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the repo into your own GitHub account.  Make sure to [follow the instructions](https://help.github.com/en/github/getting-started-with-github/fork-a-repo#keep-your-fork-synced) on how to "Configure Remote" and "Pull in upstream changes" -- you'll want to keep your fork in sync with changes.

1. ### Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch master
     ```

1. ### Commit your changes and in GitHub, [send a pull reuqst](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)

1. ### If we suggest changes then:
  * Make the required updates.
  * Re-run the test suites to ensure tests are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```