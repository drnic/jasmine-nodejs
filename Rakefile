desc "Install the jasmine project in vendor"
task :vendor do
  sh "mkdir -p vendor"
  sh "rm -rf vendor/jasmine"
  sh "git clone git://github.com/pivotal/jasmine.git vendor/jasmine"
  sh "rm -rf vendor/jasmine/.git"
end
