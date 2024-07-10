Feature: Minesweeper

            As a player:
            - I want to play to the classic minesweeper game
            - So I want to detect all the mines in the board

            How to refer to a cell:
            - Using the (row, column) nomenclature
            - Rows and columns starts from 1

            How to load mock data:
            - Using the <ctrl>+m keyboard combination to discover
            the load mock data form

            To define the board data will use:
            "o" No mine
            "*" Mine
            "-" Row separator

            Thera are two ways to define mock data:
            - Inline:
            "*-ooo-*oo"
            - Table:
            | * | * | * |
            | o | o | o |
            | * | o | o |

    To define the board display will use:
    COVERED CELLS
    "." Hidden cell
    "!" Cell tagged has mined cell by the user
    "?" Cell tagged has inconclusive cell by the user
    "x" Cell wrongly tagged has no mined cell by the user
    UNCOVERED CELLS
    "0" Empty cell
    "1" Clean cell with 1 adjacent mine
    "2" Clean cell with 2 adjacent mines
    "3" Clean cell with 3 adjacent mines
    "4" Clean cell with 4 adjacent mines
    "5" Clean cell with 5 adjacent mines
    "6" Clean cell with 6 adjacent mines
    "7" Clean cell with 7 adjacent mines
    "8" Clean cell with 8 adjacent mines
    "@" highlighted mine
    "a" unhighlighted mine

    Background:
        Given a user opens the game

    Scenario: Start display screen
        Given the player loads the following mock data:
            """
            | * | * | o |
            | o | o | o |
            | o | o | * |
            """
        Then the board display should show the following data:
            """
            | . | . | . |
            | . | . | . |
            | . | . | . |
            """

    Scenario Outline: Uncovering a cell with no mine - Displaying the number of adjacent mines
        Given the player loads the following mock data: <boardData>
        When the player uncovers the cell (2,2)
        Then the cell (2,2) should show: <number>

        Examples:
            | boardData   | number |
            | o*o-ooo-ooo | 1      |
            | o*o-ooo-o*o | 2      |
            | o*o-ooo-*o* | 3      |
            | o*o-oo*-**o | 4      |
            | o**-*o*-o*o | 5      |
            | o**-oo*-*** | 6      |
            | *o*-*o*-*** | 7      |
            | ***-*o*-*** | 8      |

    Scenario: Pressing on a number cell - Reveal the adjacent cells as empty cells
        Given the board display shows the following data:
            """
            | . | 1 | . | . |
            | . | 2 | . | . |
            | . | . | . | . |
            """
        When the player presses on the cell (2,2)
        Then the board display should show:
            """
            | 0 | 1 | 0 | . |
            | 0 | 2 | 0 | . |
            | 0 | 0 | 0 | . |
            """

    Scenario: Releasing a number cell
        Given the board display shows the following data:
            """
            | 0 | 1 | 0 | . |
            | 0 | 2 | 0 | . |
            | 0 | 0 | 0 | . |
            """
        When the player releases the cell (2,2)
        Then the board display should show:
            """
            | . | 1 | . | . |
            | . | 2 | . | . |
            | . | . | . | . |
            """

    Scenario: Uncovering a cell with no mine or mines around - Uncovering adjacent empty cells and numbers
        Given the player loads the following mock data:
            """
            | o | o | o | o | o |
            | o | o | o | o | o |
            | o | o | o | o | o |
            | * | * | * | o | o |
            | o | o | * | o | o |
            """
        When the player uncovers the cell (<row>, <column>)
        Then the board display should show the following data:
            """
            | 0 | 0 | 0 | 0 | 0 |
            | 0 | 0 | 0 | 0 | 0 |
            | 2 | 3 | 2 | 1 | 0 |
            | . | . | . | 2 | 0 |
            | . | . | . | 2 | 0 |
            """

        Examples:
            | row | column |
            | 1   | 1      |
            | 1   | 2      |
            | 1   | 3      |
            | 2   | 1      |
            | 2   | 2      |
            | 2   | 3      |
            | 5   | 5      |

    Scenario: Uncovering a cell with a mine - Losing the game
        Given the player loads the following mock data:
            """
            | o | o | o |
            | o | * | o |
            | o | o | o |
            """
        When the player uncovers the cell (2,2)
        Then the cell (2,2) should show: "@"

    Scenario: Tag a cell - Mined cell
        Given the board display shows the following data:
            """
            | . | . | . |
            | . | . | . |
            | . | . | . |
            """
        When the player right clicks on the cell (2,2)
        Then the board display should show:
            """
            | . | . | . |
            | . | ! | . |
            | . | . | . |
            """

    Scenario: Tag a cell - Inconclusive cell
        Given the board display shows the following data:
            """
            | . | . | . |
            | . | ! | . |
            | . | . | . |
            """
        When the player right clicks on the cell (2,2)
        Then the board display should show:
            """
            | . | . | . |
            | . | ? | . |
            | . | . | . |
            """

    Scenario: Tag a number cell
        Given the board display shows the following data:
            """
            | . | 1 | . |
            | . | 2 | . |
            | . | . | . |
            """
        When the player right clicks on the cell (2,2)
        Then the board display should show:
            """
            | . | 1 | . |
            | . | 2 | . |
            | . | . | . |
            """

    Scenario: Untag a cell
        Given the board display shows the following data:
            """
            | . | . | . |
            | . | ? | . |
            | . | . | . |
            """
        When the player right clicks on the cell (2,2)
        Then the board display should show:
            """
            | . | . | . |
            | . | . | . |
            | . | . | . |
            """

    Scenario: Tag all mines
        Given the player loads the following mock data:
            """
            | o | o | * |
            | * | o | o |
            | o | o | * |
            """
        And the display shows the following value:
            """
            | . | . | ! |
            | . | 3 | . |
            | 1 | . | ! |
            """
        When the player right clicks on the cell (2, 1)
        Then the display should show the following value:
            """
            | . | . | ! |
            | ! | 3 | . |
            | 1 | . | ! |
            """

    Scenario: Tag more mines than the existent
        Given the player loads the following mock data:
            """
            | o | o | * |
            | * | o | o |
            | o | o | * |
            """
        And the display shows the following value:
            """
            | . | . | ! |
            | ! | 3 | . |
            | 1 | . | ! |
            """
        When the player right clicks on the cell (1, 1)
        Then the display should show the following value:
            """
            | ! | . | ! |
            | ! | 3 | . |
            | 1 | . | ! |
            """


    Scenario: Uncover all unmined cells - Winning the game and tag the untagged mines
        Given the player loads the following mock data:
            """
            | o | o | * |
            | * | o | o |
            | o | o | * |
            """
        And the board display shows the following data:
            """
            | 1 | 2 | . |
            | ! | . | 2 |
            | 1 | 2 | . |
            """
        When the player uncovers the cell (2,2)
        Then the board display should show the following data:
            """
            | 1 | 2 | ! |
            | ! | 3 | 2 |
            | 1 | 2 | ! |
            """

    Scenario: Uncover a mined cell - Loosing the game and uncover the untagged mines
        Given the player loads the following mock data:
            """
            | o | o | * |
            | * | o | * |
            | o | o | * |
            """
        And the board display shows the following data:
            """
            | 1 | . | . |
            | . | 4 | . |
            | . | . | . |
            """
        When the player uncovers the cell (2,1)
        Then the the board display should show the following data:
            """
            | 1 | . | a |
            | @ | 4 | a |
            | . | . | a |
            """

    Scenario: Uncover a mined cell - Highlight wrongfully tagged cell
        Given the player loads the following mock data:
            """
            | o | o | o |
            | * | o | o |
            | o | o | o |
            """
        And the player right clicks the cell (2, 2)
        When the player uncovers the cell (2,1)
        Then the cell (2,2) should show: "x"

    Scenario: Uncover adjacent empty cells with a tag
        Given the player loads the following mock data:
            """
            | o | o | o |
            | o | o | o |
            | o | o | o |
            | * | * | * |
            | o | o | * |
            """
        And the player right clicks on the cell (2, 2)
        And the player uncovers the cell (1, 2)
        Then the display should show the following data:
            """
            | 0 | 0 | 0 |
            | 0 | ! | 0 |
            | 2 | 3 | 2 |
            | . | . | . |
            | . | . | . |
            """

    Scenario: Chording - Untag cells with no mines around a number
        Given the player loads the following mock data:
            """
            | o | o | * |
            | * | o | o |
            | o | o | * |
            """
        And the board display  shows the following data:
            """
            | . | . | ! |
            | ! | 3 | . |
            | . | . | ! |
            """
        When the player clicks on the cell (2, 2)
        Then the board display should show the following data:
            """
            | 1 | 2 | ! |
            | ! | 3 | 2 |
            | 1 | 2 | ! |
            """

    Scenario: Chording with excessive tags around a number
        Given the player loads the following mock data:
            """
            | o | o | * |
            | * | o | o |
            | o | o | * |
            """
        And the board display  shows the following data:
            """
            | . | ! | ! |
            | ! | 3 | . |
            | . | . | ! |
            """
        When the player clicks on the cell (2, 2)
        Then the board display should show the following data:
            """
            | . | ! | ! |
            | ! | 3 | . |
            | . | . | ! |
            """

    Scenario: Chording with not enough tags around a number
        Given the player loads the following mock data:
            """
            | o | o | * |
            | * | o | o |
            | o | o | * |
            """
        And the board display  shows the following data:
            """
            | . | . | ! |
            | . | 3 | . |
            | . | . | ! |
            """
        When the player clicks on the cell (2, 2)
        Then the board display should show the following data:
            """
            | . | . | ! |
            | . | 3 | . |
            | . | . | ! |
            """

    Scenario: Chording - Untag cells with mines around a number
        Given the player loads the following mock data:
            """
            | o | o | * |
            | * | o | o |
            | o | o | * |
            """
        And the board display shows the following data:
            """
            | ! | . | ! |
            | . | 3 | . |
            | . | . | ! |
            """
        When the player clicks on the cell (2, 2)
        Then the board display should show the following data:
            """
            | x | 2 | ! |
            | @ | 3 | 2 |
            | 1 | 2 | ! |
            """

    Scenario: Uncovering cells after winning a game
        Given the user loads the following mock data:
            """
            | o | o | * |
            | * | o | o |
            | o | o | * |
            """
        And the board display shows the following value:
            """
            | 1 | 2 | ! |
            | ! | 3 | 2 |
            | 1 | 2 | ! |
            """
        When the user uncovers the cell (1, 3)
        Then the board display should show the following data:
            """
            | 1 | 2 | ! |
            | ! | 3 | 2 |
            | 1 | 2 | ! |
            """

    Scenario: Uncovering cells after loosing the game
        Given the player loads the following mock data:
            """
            | o | o | * |
            | * | o | o |
            | o | o | * |
            """
        And the board display shows the following data:
            """
            | x | 2 | ! |
            | @ | 3 | 2 |
            | 1 | 2 | ! |
            """
        When the player clicks on the cell (1, 3)
        Then the board display should show the following data:
            """
            | x | 2 | ! |
            | @ | 3 | 2 |
            | 1 | 2 | ! |
            """

    Scenario: Tagging/untagging cells after winning a game
        Given the user loads the following mock data:
            """
            | o | o | * |
            | * | o | o |
            | o | o | * |
            """
        And the board display shows the following value:
            """
            | 1 | 2 | ! |
            | ! | 3 | 2 |
            | 1 | 2 | ! |
            """
        When the user right clicks on the cell (1, 1)
        And the user right clicks on the cell (1, 3)
        Then the board display should show the following data:
            """
            | 1 | 2 | ! |
            | ! | 3 | 2 |
            | 1 | 2 | ! |
            """

    Scenario: Tagging/untagging cells after loosing the game
        Given the player loads the following mock data:
            """
            | o | o | * |
            | * | o | o |
            | o | o | * |
            """
        And the board display shows the following data:
            """
            | x | 2 | ! |
            | @ | 3 | 2 |
            | 1 | 2 | ! |
            """
        When the player right clicks on the cell (2, 1)
        And the player right clicks on the cell (1, 1)
        Then the board display should show the following data:
            """
            | x | 2 | ! |
            | @ | 3 | 2 |
            | 1 | 2 | ! |
            """

    Scenario: Disabling the board after winning the game
        Given the user loads the following mock data:
            """
            | o | o | * |
            | * | o | o |
            | o | o | * |
            """
        And the board display shows the following value:
            """
            | 1 | 2 | ! |
            | ! | 3 | 2 |
            | 1 | 2 | ! |
            """
        Then the board display should be disabled


    Scenario: Disabling the board after loosing the game
        Given the player loads the following mock data:
            """
            | o | o | * |
            | * | o | o |
            | o | o | * |
            """
        And the board display shows the following data:
            """
            | x | 2 | ! |
            | @ | 3 | 2 |
            | 1 | 2 | ! |
            """
        Then the board display should be disabled