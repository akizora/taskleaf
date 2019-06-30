class SampleJob < ApplicationJob
  queue_as :default

  def perform(*args)
    # Do something later
    # 7-8-2 ジョブの作成
    Sidekiq::Logging.logger.info "サンプルジョブを実行しました"
  end
end
