class CommandValidationError < StandardError
  attr_reader :errors
  def initialize(message = nil, errors = nil)
    super(message)
    @errors = errors
  end
end
