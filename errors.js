1. > Task :app:packageReleaseBundle FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:packageReleaseBundle'.
> A failure occurred while executing com.android.build.gradle.internal.tasks.Workers$ActionFacade
   > At most one element <application> with namespace '' was expected, but 2 were found.
   
Solution - AndroidManifest.xml must have only 1 <application></application>
