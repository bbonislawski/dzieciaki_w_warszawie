if ENV['COVERAGE'] == 'true'
  require 'simplecov'
  SimpleCov.start 'rails' do
    add_filter '/serializers/'
    add_filter '/controllers/'
    add_filter '/jobs/'
    add_filter '/mailers/'
    add_filter '/lib/adapters/'
    add_filter do |source_file|
      source_file.lines.count < 5
    end
  end
end
RSpec.configure do |config|
  RSpec::Expectations.configuration.on_potential_false_positives = :nothing
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups
end
