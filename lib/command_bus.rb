require 'arkency/command_bus'
class CommandBus
  def self.setup
    Arkency::CommandBus.new.tap do |cb|
      {
      }.map { |ch| cb.register(*ch) }
    end
  end
end
