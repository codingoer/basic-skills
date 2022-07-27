-Xms1024m
-Xmx2048m
-XX:ReservedCodeCacheSize=512m
-XX:+UseG1GC
-XX:-UseParNewGC
-XX:SoftRefLRUPolicyMSPerMB=50
-XX:+HeapDumpOnOutOfMemoryError
-XX:-OmitStackTraceInFastThrow
-ea
-Dsun.io.useCanonCaches=false
-Djdk.http.auth.tunneling.disabledSchemes=""
-Djdk.attach.allowAttachSelf=true
-Djdk.module.illegalAccess.silent=true
-Dkotlinx.coroutines.debug=off

# JIT参数

-XX:CICompilerCount=2
-XX:TieredStopAtLevel=1
-XX:MaxInlineLevel=3
-XX:Tier4MinInvocationThreshold=100000
-XX:Tier4InvocationThreshold=110000
-XX:Tier4CompileThreshold=120000