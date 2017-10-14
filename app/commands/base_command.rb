class BaseCommand
  attr_reader :data
  include Hanami::Validations

  def initialize(input = {})
    super
    @input = @input.symbolize_keys
    validation_result = validate
    raise CommandValidationError.new('Validation Failed', validation_result.errors) unless validation_result.success?
    @data = validation_result.output
  end
end
