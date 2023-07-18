Feature: Simple Logger Function

Scenario: Logging a message with INFO level
  Given the logger is set up
  When I log a message with level INFO
  Then the message should be written to the log file with [INFO] prefix

Scenario: Logging a message with WARNING level
  Given the logger is set up
  When I log a message with level WARNING
  Then the message should be written to the log file with [WARNING] prefix

Scenario: Logging a message with ERROR level
  Given the logger is set up
  When I log a message with level ERROR
  Then the message should be written to the log file with [ERROR] prefix

Scenario: Logging multiple messages with different levels
  Given the logger is set up
  When I log a message with level INFO
  And I log a message with level WARNING
  And I log a message with level ERROR
  Then all messages should be written to the log file with appropriate prefixes

Scenario: Logging a message with a custom log file name
  Given the logger is set up with a custom log file name
  When I log a message with level INFO
  Then the message should be written to the custom log file

Scenario: Handling non-existing log file
  Given the logger is set up
  When I log a message with level INFO to a non-existing log file
  Then the logger should create the log file and write the message to it

Scenario: Logging large volume of messages
  Given the logger is set up
  When I log a large number of messages with different levels
  Then all messages should be written to the log file without errors or missing logs

Scenario: Verifying log timestamp format
  Given the logger is set up
  When I log a message with level INFO
  Then the log file should contain messages with timestamps in the format [YYYY-MM-DD HH:mm:ss]

Scenario: Verifying log message content
  Given the logger is set up
  When I log a message with level INFO
  Then the log file should contain the correct log message with the provided content

Scenario: Logging messages concurrently
  Given the logger is set up
  When I log messages concurrently from multiple threads or processes
  Then all messages should be correctly written to the log file without overlaps or corruption

